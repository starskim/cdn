#!/bin/bash

CentOS_ver=$(lsb_release -rs | awk -F. '{print $1}' | awk '{print $1}')

######## hostname ########
if [ "${CentOS_ver}" == '7' ]; then
  sh -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/starskim/cdn@latest/pxe/shell/hostname.sh)"
fi
if [ "${CentOS_ver}" == '8' ]; then
  /bin/bash /root/hostname.sh
fi

######## sysctl ########
[[ ! "${OS}" =~ ^EulerOS$|^openEuler$ ]] && [ -z "$(grep ^'PROMPT_COMMAND=' /etc/bashrc)" ] && cat >> /etc/bashrc << EOF
PROMPT_COMMAND='{ msg=\$(history 1 | { read x y; echo \$y; });logger "[euid=\$(whoami)]":\$(who am i):[\`pwd\`]"\$msg"; }'
EOF

######## sysctl ########
[ ! -e "/etc/sysctl.conf_bk" ] && /bin/mv /etc/sysctl.conf{,_bk}
cat > /etc/sysctl.conf << EOF
fs.file-max=1000000
net.ipv4.tcp_max_tw_buckets = 6000
net.ipv4.tcp_sack = 1
net.ipv4.tcp_window_scaling = 1
net.ipv4.tcp_rmem = 4096 87380 4194304
net.ipv4.tcp_wmem = 4096 16384 4194304
net.ipv4.tcp_max_syn_backlog = 16384
net.core.netdev_max_backlog = 32768
net.core.somaxconn = 32768
net.core.wmem_default = 8388608
net.core.rmem_default = 8388608
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.tcp_timestamps = 1
net.ipv4.tcp_fin_timeout = 20
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syn_retries = 2
net.ipv4.tcp_syncookies = 1
#net.ipv4.tcp_tw_len = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_mem = 94500000 915000000 927000000
net.ipv4.tcp_max_orphans = 3276800
net.ipv4.ip_local_port_range = 1024 65000
net.nf_conntrack_max = 6553500
net.netfilter.nf_conntrack_max = 6553500
net.netfilter.nf_conntrack_tcp_timeout_close_wait = 60
net.netfilter.nf_conntrack_tcp_timeout_fin_wait = 120
net.netfilter.nf_conntrack_tcp_timeout_time_wait = 120
net.netfilter.nf_conntrack_tcp_timeout_established = 3600
EOF

######## limits ########
[ -e /etc/security/limits.d/*nproc.conf ] && rename nproc.conf nproc.conf_bk /etc/security/limits.d/*nproc.conf
sed -i '/^# End of file/,$d' /etc/security/limits.conf
cat >> /etc/security/limits.conf <<EOF
# End of file
* soft nproc 1000000
* hard nproc 1000000
* soft nofile 1000000
* hard nofile 1000000
EOF

######## PAM ########
echo "session required /usr/lib64/security/pam_limits.so" >> /etc/pam.d/login

######## repo ########
rm -f /etc/yum.repos.d/Centos*.repo
rm -f /etc/yum.repos.d/epel*.repo
rm -f /etc/yum.repos.d/zabbix*.repo
yum clean all
pkgList="iftop htop python2-pip python2-devel python2 python3-pip python3-devel python3 bash-completion bash-completion-extras vim wget gcc ntpdate ntp ncurses-devel deltarpm gcc-c++ make cmake autoconf libjpeg libjpeg-devel libjpeg-turbo libjpeg-turbo-devel libpng libpng-devel libxml2 libxml2-devel zlib zlib-devel glibc glibc-devel krb5-devel libc-client libc-client-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel libaio numactl numactl-libs readline-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5-devel libidn libidn-devel openssl openssl-devel net-tools libxslt-devel libicu-devel libevent-devel libtool libtool-ltdl bison gd-devel vim-enhanced pcre-devel libmcrypt libmcrypt-devel mhash mhash-devel mcrypt zip unzip sqlite-devel sysstat patch bc expect expat-devel oniguruma oniguruma-devel libtirpc-devel nss rsync rsyslog git lsof lrzsz psmisc which libatomic tmux gettext-devel perl-ExtUtils-MakeMaker redhat-lsb-core docker-ce cmake3 libzip libzip-devel wget chrony rpcgen zabbix-agent"
for Package in ${pkgList}; do
  yum -y install ${Package}
done
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
pip3 install glances

######## Update time ########
if [ -e "$(which ntpdate)" ]; then
  ntpdate 10.0.0.254
  echo "*/5 * * * * root ntpdate 10.0.0.254" >> /etc/crontab
fi

######## OneinStack ########
cd ~
if [ ! -e "./oneinstack" ];then
  wget -c http://mirrors.linuxeye.com/oneinstack-full.tar.gz
  tar xzf oneinstack-full.tar.gz
  rm -rf oneinstack-full.tar.gz
fi

######## Docker Compose ########
if [ -e "$(which docker)" ]; then
  if [ ! -e "/usr/local/bin/docker-compose" ];then
    curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
  fi  
  systemctl enable docker
  systemctl start docker
fi

######## zabbix ########
if [ -e "$(which zabbix_agentd)" ]; then
  sed -i 's/^Server=.*$/Server=0.0.0.0\/0,::\/0/' /etc/zabbix/zabbix_agentd.conf
  sed -i 's/^ServerActive=.*$/ServerActive=10.0.0.248/' /etc/zabbix/zabbix_agentd.conf
  sed -i 's/^Hostname=.*$/Hostname='$(hostname)'/' /etc/zabbix/zabbix_agentd.conf
  systemctl enable zabbix-agent
  systemctl start zabbix-agent
fi
######## git ########
if [ "${CentOS_ver}" == '7' ]; then
  sh -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/starskim/cdn@latest/pxe/shell/installgit.sh)"
fi

######## zsh ########
if [ "${CentOS_ver}" == '7' ]; then
  sh -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/starskim/cdn@latest/pxe/shell/ohmyzsh.sh)"
fi
if [ "${CentOS_ver}" == '8' ]; then
  /bin/bash /root/ohmyzsh.sh
fi
######## 删除预设的脚本 ########
sed -i '/.*pxe-setting-script\.sh.*/d' /etc/rc.d/rc.local
rm -rf /etc/rc.local && ln -s /etc/rc.d/rc.local /etc/rc.local
rm -rf /root/*.sh
rm -f ~/*.cfg

######## 重启 ########
reboot