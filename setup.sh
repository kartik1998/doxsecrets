#/bin/bash

echo "We will use docker to setup gitleaks image, Ensure docker is running on your system."

while true; do
    read -p "pull docker image ? [Y/n]" yn
    case $yn in
        [Yy]* ) docker pull zricethezav/gitleaks; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done 



