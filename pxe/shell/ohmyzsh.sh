#!/bin/bash
cd ~
# Install oh-my-zsh
if [ ! -e "~/.oh-my-zsh" ];then
git clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh
else
cd ~/.oh-my-zsh
git pull
cd ~
fi
wget -c -O ~/.zshrc https://cdn.jsdelivr.net/gh/starskim/cdn@latest/pxe/zsh/.zshrc
cd ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}
echo 'robbyrussell-ascii.zsh-theme'
if [ ! -e "./themes/robbyrussell-ascii.zsh-theme" ];then
wget -c -O ./themes/robbyrussell-ascii.zsh-theme https://cdn.jsdelivr.net/gh/starskim/cdn@latest/pxe/zsh/robbyrussell-ascii.zsh-theme
fi
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
cd ~
wget -c -O zsh-5.8.tar.xz https://sourceforge.net/projects/zsh/files/zsh/5.8/zsh-5.8.tar.xz/download
tar xvf zsh-5.8.tar.xz
cd zsh-5.8
./configure --with-tcsetpgrp && make && make install
/usr/local/bin/zsh --version
echo "/usr/local/bin/zsh" | tee -a /etc/shells
chsh -s $(which zsh)