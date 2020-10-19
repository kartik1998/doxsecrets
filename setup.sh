#/bin/bash

function setup_truffleHog {
while true; do
    read -p "Install truffleHog ? [Y/n]" yn
    case $yn in
        [Yy]* ) pip3 install truffleHog; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done 
}

function install_modules {
while true; do
    read -p "Install npm modules ? [Y/n]" yn
    case $yn in
        [Yy]* ) npm install; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done 
}

install_modules
echo "We will use pip install to setup truffleHog."
setup_truffleHog

echo "npm run dev : starting up"
npm run dev


