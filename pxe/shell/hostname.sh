#!/bin/bash

######## hostname ########
LOCAL_IPADDR=$(hostname -I | cut -d ' ' -f 1)
PTR_ANSWER=$(dig +short -x "$LOCAL_IPADDR")
ens=$(cat /proc/net/dev | awk '$1 ~ /ens/ {print $1}' | sed 's/^[\t]*//g' | sed 's/[:]*$//g')
if [ -z "$PTR_ANSWER" ] ; then
    hostname=linux_$(sed 's/://g' < /sys/class/net/$ens/address | cut -c 7-12)
else
    hostname=$(echo "$PTR_ANSWER" | cut -d '.' -f 1)
fi

hostnamectl set-hostname "$hostname"
