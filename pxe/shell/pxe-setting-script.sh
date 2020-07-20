#!/bin/bash

######## hostname ########
LOCAL_IPADDR=$(hostname -I | cut -d ' ' -f 1)
PTR_ANSWER=$(dig +short -x "$LOCAL_IPADDR")
ens=$(cat /proc/net/dev | awk '{i++; if(i>3){print $1}}' | sed 's/^[\t]*//g' | sed 's/[:]*$//g')
if [ -z "$PTR_ANSWER" ] ; then
    hostname=linux_$(sed 's/://g' < /sys/class/net/$ens/address | cut -c 7-12)
else
    hostname=$(echo "$PTR_ANSWER" | cut -d '.' -f 1)
fi

hostnamectl set-hostname "$hostname"

######## sysctl ########
cat <<EOF >> /etc/sysctl.conf

# 允许内核分配所有可用的物理内存
vm.overcommit_memory = 1

# 单个进程允许的最大 fd 数量
fs.file-max = 10245760000

# linux 内核允许的最大 fd 数量
fs.nr_open = 10245760000

# 数据包转发
net.    4.ip_forward = 1

# 防范syn攻击
net.ipv4.tcp_syncookies = 1

# 禁用重用time_wait的tcp端口
net.ipv4.tcp_tw_reuse = 0

# fin_wait超时时间
net.ipv4.tcp_fin_timeout = 15

# 动态分配端口的范围
net.ipv4.ip_local_port_range = 20000 65535

# 套接字最大数量
net.ipv4.tcp_max_tw_buckets = 65535

# syn队列长度
net.ipv4.tcp_max_syn_backlog = 10240

# 最大设备队列长度
net.core.netdev_max_backlog = 10240

# listen()等待请求的最大数量
net.core.somaxconn = 10240

# tcp 连接丢包重传次数，达到此值将刷新路由缓存
net.ipv4.tcp_retries1 = 2

# tcp 连接丢包重传次数，达到此值将断开 TCP 连接
net.ipv4.tcp_retries2 = 4

# 放弃建立连接前内核发送syn包的数量
net.ipv4.tcp_syn_retries = 2

# 放弃连接前内核发送syn+ack包的数量
net.ipv4.tcp_synack_retries = 2

# keepalive idle空闲时间
net.ipv4.tcp_keepalive_time = 30

# keepalive intvl间隔时间
net.ipv4.tcp_keepalive_intvl = 2

# keepalive probes最大探测次数
net.ipv4.tcp_keepalive_probes = 3

# 内核允许的最大孤立socket数量
net.ipv4.tcp_max_orphans = 4096

# socket默认读buffer大小
net.core.rmem_default = 655350

# socket默认写buffer大小
net.core.wmem_default = 655350

# socket最大读buffer大小
net.core.rmem_max = 65535000

# socket最大写buffer大小
net.core.wmem_max = 65535000

# socket最大内存buffer大小
net.core.optmem_max = 65535000

# tcp_socket读buffer大小. min/default/max
net.ipv4.tcp_rmem = 16384 1048576 12582912

# tcp_socket写buffer大小. min/default/max
net.ipv4.tcp_wmem = 16384 1048576 12582912

# 开启tcp_fastopen
net.ipv4.tcp_fastopen = 3

# 在路由中缓存 TCP 连接的各项指标
net.ipv4.tcp_no_metrics_save = 0

# 在连接空闲期间保持拥塞窗口的大小
net.ipv4.tcp_slow_start_after_idle = 0

# 磁盘
vm.dirty_background_ratio = 20
vm.dirty_ratio = 30
vm.dirty_expire_centisecs = 1000
vm.dirty_writeback_centisecs =  = 300
vm.min_free_kbytes = 65536
vm.swappiness = 1

EOF

######## limits ########
cat <<EOF >> /etc/security/limits.conf

*    soft    nofile          65535
*    hard    nofile          65535
*    soft    memlock         unlimited
*    hard    memlock         unlimited

EOF

######## PAM ########
echo "session required /usr/lib64/security/pam_limits.so" >> /etc/pam.d/login

######## repo ########
rm -f /etc/yum.repos.d/Centos*.repo
rm -f /etc/yum.repos.d/epel*.repo
yum clean all
yum install -y iftop htop python-pip python3-pip python3-devel python3 bash-completion bash-completion-extras vim wget gcc \
  ntpdate ntp ncurses-devel deltarpm gcc-c++ make cmake autoconf libjpeg libjpeg-devel libjpeg-turbo \
  libjpeg-turbo-devel libpng libpng-devel libxml2 libxml2-devel zlib zlib-devel libzip libzip-devel glibc glibc-devel \
  krb5-devel libc-client libc-client-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel libaio numactl \
  numactl-libs readline-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5-devel libidn libidn-devel openssl openssl-devel \
  net-tools libxslt-devel libicu-devel libevent-devel libtool libtool-ltdl bison gd-devel vim-enhanced pcre-devel libmcrypt \
  libmcrypt-devel mhash mhash-devel mcrypt zip unzip ntpdate sqlite-devel sysstat patch bc \
  expect expat-devel oniguruma oniguruma-devel libtirpc-devel nss rsync rsyslog git lsof lrzsz \
  psmisc which libatomic tmux gettext-devel perl-ExtUtils-MakeMaker redhat-lsb-core
pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
pip3 install glances

######## crontab ########
echo "*/5 * * * * root ntpdate 10.0.0.254" >> /etc/crontab

######## OneinStack ########
cd ~
wget -c http://mirrors.linuxeye.com/oneinstack-full.tar.gz
tar xzf oneinstack-full.tar.gz && rm -rf oneinstack-full.tar.gz

######## 代理 ########
export https_proxy=http://10.0.0.251:7890 http_proxy=http://10.0.0.251:7890 all_proxy=socks5://10.0.0.251:7891

######## zsh ########
sh -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/starskim/cdn/pxe/shell/ohmyzsh.sh)"

######## git ########
sh -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/starskim/cdn/pxe/shell/installgit.sh)"

######## 删除预设的脚本 ########
sed -i '/.*pxe-setting-script\.sh.*/d' /etc/rc.d/rc.local
rm -rf /etc/rc.local && ln -s /etc/rc.d/rc.local /etc/rc.local
rm -f ~/*.cfg

######## 重启 ########
reboot 