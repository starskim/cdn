#!/bin/bash

# Install oh-my-zsh
cd ~
wget -O zsh-5.8.tar.xz https://sourceforge.net/projects/zsh/files/zsh/5.8/zsh-5.8.tar.xz/download
tar xvf zsh-5.8.tar.xz && rm -rf xvf zsh-5.8.tar.xz
cd zsh-5.8
./configure --with-tcsetpgrp && make && make install
/usr/local/bin/zsh --version
echo "/usr/local/bin/zsh" | tee -a /etc/shells

# Install oh-my-zsh
# export https_proxy=http://10.0.0.251:10809 http_proxy=http://10.0.0.251:10809 all_proxy=socks5://10.0.0.251:10808
git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh
wget -O ~/.zshrc https://cdn.starskim.cn/pxe/zsh/.zshrc
cd ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}
echo 'powerlevel10k'
if [ ! -e "./themes/powerlevel10k" ];then
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ./themes/powerlevel10k
else
cd ./themes/powerlevel10k
git pull
fi
cd ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins
echo 'zsh-completions'
if [ ! -e "./zsh-completions" ];then
git clone https://github.com/zsh-users/zsh-completions ./zsh-completions
else
cd ./zsh-completions
git pull
cd ..
fi
echo 'zsh-syntax-highlighting'
if [ ! -e "./zsh-syntax-highlighting" ];then
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ./zsh-syntax-highlighting
else
cd ./zsh-syntax-highlighting
git pull
cd ..
fi
echo 'zsh-autosuggestions'
if [ ! -e "./zsh-autosuggestions" ];then
git clone https://github.com/zsh-users/zsh-autosuggestions ./zsh-autosuggestions
else
cd ./zsh-autosuggestions
git pull
cd ..
fi
autoload -U compinit && compinit
chsh -s /usr/local/bin/zsh