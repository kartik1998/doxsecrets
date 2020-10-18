#/bin/bash

git clone https://github.com/deshpandetanmay/git-secrets.git
cd git-secrets/

echo "Now we will start the installation. Enter your password:"
sudo make install

git secrets --install ~/.git-templates/git-secrets
git config --global init.templateDir ~/.git-templates/git-secrets
git config --global core.hooksPath ~/.git-templates/git-secrets/hooks
git secrets --register-aws --global
git secrets --register-gcp --global

cd ../
rm -rf git-secrets