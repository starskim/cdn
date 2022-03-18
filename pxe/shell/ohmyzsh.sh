#!/bin/bash

CentOS_ver=$(lsb_release -rs | awk -F. '{print $1}' | awk '{print $1}')

cd ~
# Install oh-my-zsh
if [ ! -e "/root/.oh-my-zsh" ];then
    git clone https://github.starskim.com/https://github.com/ohmyzsh/ohmyzsh.git /root/.oh-my-zsh
else
    cd ~/.oh-my-zsh
    git pull
cd ~
fi
omz=${ZSH_CUSTOM:-/root/.oh-my-zsh/custom}
if [ -e "/root/.oh-my-zsh" ];then
    wget -c -O /root/.zshrc https://cdn.jsdelivr.net/gh/starskim/cdn@latest/pxe/zsh/zshrc.zsh-template
    cd ${omz}
    echo 'robbyrussell-ascii.zsh-theme'
    if [ ! -e "${omz}/themes/robbyrussell-ascii.zsh-theme" ];then
        wget -c -O ${omz}/themes/robbyrussell-ascii.zsh-theme https://cdn.starskim.cn/pxe/zsh/robbyrussell-ascii.zsh-theme
    fi
    echo 'powerlevel10k'
    if [ ! -e "${omz}/themes/powerlevel10k" ];then
        git clone --depth=1 https://github.starskim.com/https://github.com/romkatv/powerlevel10k.git ${omz}/themes/powerlevel10k
    else
        cd ${omz}/themes/powerlevel10k
        git pull
    fi
    cd ${omz}/plugins
    echo 'zsh-completions'
    if [ ! -e "${omz}/plugins/zsh-completions" ];then
        git clone https://github.starskim.com/https://github.com/zsh-users/zsh-completions ${omz}/plugins/zsh-completions
    else
        cd ${omz}/plugins/zsh-completions
        git pull
        cd ..
    fi
    echo 'zsh-syntax-highlighting'
    if [ ! -e "${omz}/plugins/zsh-syntax-highlighting" ];then
        git clone https://github.starskim.com/https://github.com/zsh-users/zsh-syntax-highlighting ${omz}/plugins/zsh-syntax-highlighting
    else
        cd ${omz}/plugins/zsh-syntax-highlighting
        git pull
        cd ..
    fi
    echo 'zsh-autosuggestions'
    if [ ! -e "${omz}/plugins/zsh-autosuggestions" ];then
        git clone https://github.starskim.com/https://github.com/zsh-users/zsh-autosuggestions ${omz}/plugins/zsh-autosuggestions
    else
        cd ${omz}/plugins/zsh-autosuggestions
        git pull
        cd ..
    fi
fi
cd ~
zsh_version=$(zsh --version | awk '{print $2}')
if [ "${CentOS_ver}" == '7' ]; then
    if [ "${zsh_version}" != '5.8' ]; then
        wget -c -O zsh-5.8.tar.xz https://cdn.jsdelivr.net/gh/starskim/cdn@latest/pxe/zsh/zsh-5.8.tar.xz
        tar xvf zsh-5.8.tar.xz
        rm -rf zsh-5.8.tar.xz
        cd zsh-5.8
        ./configure --with-tcsetpgrp && make && make install
        /usr/local/bin/zsh --version
        echo "/usr/local/bin/zsh" | tee -a /etc/shells
    fi
fi
chsh -s $(which zsh)
zsh
autoload -U compinit && compinit

