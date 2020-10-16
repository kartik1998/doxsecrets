#/bin/bash

function setup_docker {
while true; do
    read -p "pull docker image ? [Y/n]" yn
    case $yn in
        [Yy]* ) docker pull zricethezav/gitleaks; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done 
}

function install_modules {
while true; do
    read -p "install npm modules ? [Y/n]" yn
    case $yn in
        [Yy]* ) npm install; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done 
}

install_modules
echo "We will use docker to setup gitleaks image, Ensure docker is running on your system."
setup_docker

echo "npm run dev : starting up"
npm run dev


