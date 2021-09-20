#!/bin/bash

NetworkName=`ls /etc/sysconfig/network-scripts/ifcfg-* | xargs -n1 | awk -F- '{print $NF}' | head -1`
# 检查网卡名: 如果不是eth0,修改为eth0
if [ "$NetworkName" = "eth0" ]; then
    echo "NetworkName:$NetworkName"
    exit 0
else
    sed -i 's/\(GRUB_CMDLINE_LINUX=".*\)"/\1 net.ifnames=0"/' /etc/default/grub
    grub2-mkconfig -o /etc/grub2.cfg
    sed -i 's/\(^NAME=\).*/\1eth0/' /etc/sysconfig/network-scripts/ifcfg-$NetworkName
    sed -i 's/\(^DEVICE=\).*/\1eth0/' /etc/sysconfig/network-scripts/ifcfg-$NetworkName
    mv /etc/sysconfig/network-scripts/ifcfg-$NetworkName /etc/sysconfig/network-scripts/ifcfg-eth0
    nmcli c reload
    cat > /etc/udev/rules.d/70-persistent-net.rules << EOF
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="$(sed '' < /sys/class/net/$NetworkName/address)", NAME="eth0"
EOF
fi

######## hostname ########
LOCAL_IPADDR=$(hostname -I | cut -d ' ' -f 1)
PTR_ANSWER=$(dig +short -x "$LOCAL_IPADDR")
if [ -z "$PTR_ANSWER" ] ; then
    hostname=linux_$(sed 's/://g' < /sys/class/net/$NetworkName/address | cut -c 7-12)
else
    hostname=$(echo "$PTR_ANSWER" | cut -d '.' -f 1)
fi

hostnamectl set-hostname "$hostname"
