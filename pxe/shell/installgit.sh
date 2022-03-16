#!/bin/bash

# Install Git
cd ~
git_version=$(git version | awk '{print $3}')
if [ "${git_version}" != '2.35.1' ]; then
    wget -c https://www.kernel.org/pub/software/scm/git/git-2.35.1.tar.gz
    tar -zxvf git-2.35.1.tar.gz
    rm -rf git-2.35.1.tar.gz
    cd git-2.35.1
    make configure
    ./configure --prefix=/usr/local/git
    make profix=/usr/local/git
    make install
    [ -z "`grep ^'export GIT_HOME=' /etc/profile`" ] && { [ -z "`grep ^'export PATH=' /etc/profile`" ] && echo  "export GIT_HOME=/usr/local/git" >> /etc/profile || sed -i "s@^export PATH=@export GIT_HOME=/usr/local/git\nexport PATH=@" /etc/profile; } || sed -i "s@^export GIT_HOME=.*@export GIT_HOME=/usr/local/git@" /etc/profile
    [ -n "`grep ^'export PATH=' /etc/profile`" -a -z "`grep '$GIT_HOME/bin' /etc/profile`" ] && sed -i "s@^export PATH=\(.*\)@export PATH=\$GIT_HOME/bin:\1@" /etc/profile
    [ -z "`grep ^'export PATH=' /etc/profile | grep '$GIT_HOME/bin'`" ] && echo 'export PATH=$GIT_HOME/bin:$PATH' >> /etc/profile
    . /etc/profile
fi
