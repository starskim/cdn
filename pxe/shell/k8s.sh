#!/bin/bash

echo=echo
for cmd in echo /bin/echo; do
  $cmd >/dev/null 2>&1 || continue
  if ! $cmd -e "" | grep -qE '^-e'; then
    echo=$cmd
    break
  fi
done
CSI=$($echo -e "\033[")
CEND="${CSI}0m"
CYELLOW="${CSI}1;33m"
CWARNING="$CYELLOW"

TEMP=`getopt -o hvV --long help,kubernetes-version:,token:,discovery-token-ca-cert-hash:,certificate-key: -- "$@" 2>/dev/null`
[ $? != 0 ] && echo "${CWARNING}ERROR: unknown argument! ${CEND}" && exit 1
eval set -- "${TEMP}"
while :; do
  [ -z "$1" ] && break;
  case "$1" in
    -h|--help)
      Show_Help; exit 0
      ;;
    --kubernetes-version)
        kubernetes_version=$2
        shift 2
      ;;
    --token)
        token=$2
        shift 2
      ;;
    --discovery-token-ca-cert-hash)
        discovery_token_ca_cert_hash=$2
        shift 2
      ;;
     --certificate-key)
        certificate_key=$2
        shift 2
      ;;
    --)
      shift
      ;;
    *)
      echo "${CWARNING}ERROR: unknown argument! ${CEND}" && exit 1
      ;;
  esac
done

#容器运行时
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

# 设置所需的 sysctl 参数，参数在重新启动后保持不变
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

# 应用 sysctl 参数而不重新启动
sudo sysctl --system

# 关闭 swap
swapoff -a
yes | cp /etc/fstab /etc/fstab_bak
cat /etc/fstab_bak |grep -v swap > /etc/fstab

# 安装kubelet、kubeadm、kubectl
if [ -z $kubernetes_version ]; then
  yum install -y kubelet kubeadm kubectl
else
  yum install -y kubelet-$kubernetes_version kubeadm-$kubernetes_version kubectl-$kubernetes_version
fi

crictl config runtime-endpoint /run/containerd/containerd.sock

systemctl enable --now kubelet

VIP=$(dig +short +search kube-vip)
INTERFACE=eth0
KVVERSION=$(curl -sL https://api.github.com/repos/kube-vip/kube-vip/releases | jq -r ".[0].name")
localAS=65000
bgpRouterID=$(hostname -I | cut -d ' ' -f 1)
master1=$(dig +short +search k8s-master1)
master2=$(dig +short +search k8s-master2)
master3=$(dig +short +search k8s-master3)

join(){
  if [[ -z $token || -z $discovery_token_ca_cert_hash ]]; then
    read -e -p "token: " token
    read -e -p "discovery-token-ca-cert-hash: " discovery_token_ca_cert_hash
  fi
  if [[ $(hostname) == k8s-master2 || $(hostname) == k8s-master3 ]]; then
    if [ -z $certificate_key ]; then
    read -e -p "certificate-key: " certificate_key
    fi
    kubeadm join kube-vip:6443 --token $token --discovery-token-ca-cert-hash $discovery_token_ca_cert_hash --control-plane --certificate-key $certificate_key
    mkdir -p $HOME/.kube
    sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    sudo chown $(id -u):$(id -g) $HOME/.kube/config
  else
    kubeadm join kube-vip:6443 --token $token --discovery-token-ca-cert-hash $discovery_token_ca_cert_hash
  fi
}

kubevip(){
  docker pull ghcr.io/kube-vip/kube-vip:$KVVERSION
  if [[ $(hostname) == k8s-master2 || $(hostname) == k8s-master3 ]]; then
    join
    case $(hostname) in
      k8s-master2)
        docker run --network host --rm ghcr.io/kube-vip/kube-vip:$KVVERSION manifest pod --interface $INTERFACE --address $VIP --controlplane --services --bgp --localAS $localAS --bgpRouterID $bgpRouterID --bgppeers $master1:$localAS::false,$master3:$localAS::false | tee /etc/kubernetes/manifests/kube-vip.yaml
        ;;
      k8s-master3)
        docker run --network host --rm ghcr.io/kube-vip/kube-vip:$KVVERSION manifest pod --interface $INTERFACE --address $VIP --controlplane --services --bgp --localAS $localAS --bgpRouterID $bgpRouterID --bgppeers $master1:$localAS::false,$master2:$localAS::false | tee /etc/kubernetes/manifests/kube-vip.yaml
        ;;
    esac
  else
    docker run --network host --rm ghcr.io/kube-vip/kube-vip:$KVVERSION manifest pod --interface $INTERFACE --address $VIP --controlplane --services --bgp --localAS $localAS --bgpRouterID $bgpRouterID --bgppeers $master2:$localAS::false,$master3:$localAS::false | tee /etc/kubernetes/manifests/kube-vip.yaml
  fi
}

if [[ $(hostname) == k8s-master* ]]; then
  if [ -z $kubernetes_version ]; then
    kubeadm config images pull
  else
    kubeadm config images pull --kubernetes-version $kubernetes_version
  fi
  kubevip 
  if [[ $(hostname) == k8s-master || $(hostname) == k8s-master1 ]]; then
    if [ -z $kubernetes_version ]; then
      kubeadm init --pod-network-cidr 10.244.0.0/16 --control-plane-endpoint kube-vip --upload-certs
    else
      kubeadm init --kubernetes-version $kubernetes_version --pod-network-cidr 10.244.0.0/16 --control-plane-endpoint kube-vip --upload-certs
    fi
    mkdir -p $HOME/.kube
    sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    sudo chown $(id -u):$(id -g) $HOME/.kube/config
    export https_proxy=http://dns:7894;export http_proxy=http://dns:7894;export all_proxy=socks5://dns:7894;export no_proxy=kube-vip,k8s-master,k8s-master1,k8s-master2,k8s-master3
    kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml
    curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
    sed -i 's/docker-compose/docker-compose kubectl helm/' ~/.zshrc
  fi
elif [[ $(hostname) == k8s-node* ]]; then
  join
fi