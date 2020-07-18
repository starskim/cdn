#!/bin/bash

# Install Git
cd ~
wget -c https://www.kernel.org/pub/software/scm/git/git-2.27.0.tar.gz
tar -zxvf git-2.27.0.tar.gz
cd git-2.27.0
make configure
./configure --prefix=/usr/local/git
make profix=/usr/local/git
make install
echo  "export GIT_HOME=/usr/local/git" >> /etc/profile
echo  "export PATH=$PATH:$GIT_HOME/bin" >> /etc/profile