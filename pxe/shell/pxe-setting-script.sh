#!/bin/bash

######## hostname ########
sh -c "$(curl -fsSL https://pxe.starskim.com/shell/hostname.sh)"

######## sysctl ########
[ ! -e "/etc/sysctl.conf_bk" ] && /bin/mv /etc/sysctl.conf{,_bk}
cat <<EOF >> /etc/sysctl.conf
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
yum clean all
yum install -y iftop htop python-pip python3-pip python3-devel python3 bash-completion bash-completion-extras vim wget gcc \
  ntpdate ntp ncurses-devel deltarpm gcc-c++ make cmake autoconf libjpeg libjpeg-devel libjpeg-turbo \
  libjpeg-turbo-devel libpng libpng-devel libxml2 libxml2-devel zlib zlib-devel glibc glibc-devel \
  krb5-devel libc-client libc-client-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel libaio numactl \
  numactl-libs readline-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5-devel libidn libidn-devel openssl openssl-devel \
  net-tools libxslt-devel libicu-devel libevent-devel libtool libtool-ltdl bison gd-devel vim-enhanced pcre-devel libmcrypt \
  libmcrypt-devel mhash mhash-devel mcrypt zip unzip sqlite-devel sysstat patch bc \
  expect expat-devel oniguruma oniguruma-devel libtirpc-devel nss rsync rsyslog git lsof lrzsz \
  psmisc which libatomic tmux gettext-devel perl-ExtUtils-MakeMaker redhat-lsb-core docker-ce
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
pip3 install glances

######## crontab ########
echo "*/5 * * * * root ntpdate 10.0.0.254" >> /etc/crontab

######## OneinStack ########
cd ~
wget -c http://mirrors.linuxeye.com/oneinstack-full.tar.gz
tar xzf oneinstack-full.tar.gz

######## Docker Compose ########
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

######## git ########
sh -c "$(curl -fsSL https://pxe.starskim.com/shell/installgit.sh)"

######## zsh ########
sh -c "$(curl -fsSL https://pxe.starskim.com/shell/ohmyzsh.sh)"

######## 删除预设的脚本 ########
sed -i '/.*pxe-setting-script\.sh.*/d' /etc/rc.d/rc.local
rm -rf /etc/rc.local && ln -s /etc/rc.d/rc.local /etc/rc.local
rm -f ~/*.cfg

######## 重启 ########
reboot