#!/bin/bash

# Install oh-my-zsh
# export https_proxy=http://10.0.0.251:10809 http_proxy=http://10.0.0.251:10809 all_proxy=socks5://10.0.0.251:10808
git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh
chsh -s /bin/zsh
wget -O ~/.zshrc https://cdn.starskim.cn/pxe/zsh/.zshrc
cd ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}
echo 'robbyrussell-ascii.zsh-theme'
if [ ! -e "./themes/robbyrussell-ascii.zsh-theme" ];then
wget -O ./themes/robbyrussell-ascii.zsh-theme https://cdn.starskim.cn/pxe/zsh/robbyrussell-ascii.zsh-theme
fi
cd ./plugins
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