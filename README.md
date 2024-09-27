# solana## almalinux:

docker run -it ... /bin/sh

#update
bash
dnf update
dnf group install "Development Tools" -y

#install rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

!!!!!!!!!!!!!!
During the Rust installation, there is usually a prompt asking if you want to add Rust to your PATH. If you missed it, you might need to add it manually.
!!!!!!!!!!!!!1

#update PATH
. "$HOME/.cargo/env"
exit
exit
docker start nostalgic_ardinghelli
docker exec -it nostalgic_ardinghelli /bin/bash

#check
rustc --version
cargo --version

#install solana CLI
sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"

#Close and reopen your terminal to apply the PATH changes or run the following in your existing shell:
export PATH="/root/.local/share/solana/install/active_release/bin:$PATH"

#check
solana --version

#Install Anchor CLI
#Install AVM - allows you to install and manage different Anchor versions
#f you encounter the error type annotations needed for Box<\_> when installing the Anchor CLI, try changing your Rust version to 1.79.0 and attempt the installation again.
rustup default 1.79.0

#Install AVM
cargo install --git https://github.com/coral-xyz/anchor avm --force

#warning: be sure to add `/root/.avm/bin` to your PATH to be able to run the installed binaries???????????

#Install the latest version of Anchor CLI using AVM
avm install latest
avm use latest

#check
avm --version
anchor --version

#NVM + Node installation
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash

#Close and reopen your terminal to start using nvm or run the following to use it now:
#export NVM_DIR="$HOME/.nvm"

#check
command -v nvm

#Install node
nvm install node

#check
node --version

#install Yarn
npm install --global yarn

#check
yarn --version

!!!!!!!!!!!!!!!!!!!!!!!!!!
bash: solana: command not found

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
##video

linux

1. create cryptocurrency wallet
   install solana tools sh -c "$(curl...
   relog from terminal in order to env vars to be updated
   create wallet: solana-keygen new
   private key stored in /root/.config/solana/id.json
   pubkey on screen (wallet`s address)
   recovery phrase on screen
   check balance: solana balance
   send money to this wallet
2. install rust
   curl https://sh.rustup.rs//
   relog from terminal in order to env vars to be update
   -- libudev-dev libssl-dev pkg-config (ubuntu) build-essential
3. for tokens install solana token program
   cargo install spl-token-cli
4. create token
   spl-token create-token
   response: Creating token ######token address##########
   solana balance changed (fee on creating token)
5. create account that can hold that token
   spl-token create-account ######token address##########
   response: Creating account ######token account##########
   solana balance changed (fee on creating token account)
6. fill account with tokens
   minting tokens
   spl-token mint ######token address########## 1000000000 ######token account##########
7. view token account:
   spl-token accounts
8. transfer token to a new account:
   spl-token transfer --fund-recipient --allow-unfunded-recipient ######token address########## 1000 ######destination wallet address##########
   !!!!!! --fund-recipient ... - fund the creation of an account for the wallet i am sending to
   walletul (accountul) nou creat (phantom) nu va avea by default un account pentru tokenul nostru - trebuie creat
   deci trimitem tokens si platim crearea noului cont pentru acest token
9. verifica noul wallet pentru prezenta noului token
10. verifica tranzactiile tale pe solscan.io
    cauta ######token address##########
11. name token
    add token to solana registry - github
    name, symbol, logo (png square, under 200Kb - github? (raw github url)
    solana tokenlist github page

    for mainnet token:
    login github
    https://github.com/solana-labs/token-list - fork
    open repo - in browser hit "." (launch inbrowser visual studio code) and make changes:
    assets: make new folder - name with #####token address##########
    right click the new created folder - upload - upload the logo - 'logo.png'
    src - tokens - solana.tokenlist.json: add at bottom object with your token details
    in left tab source control, commit the 2 changes: message: adding ....(name, whatever) token - commit
    go back to solana-labs prject/repo - pull requests - new pull request - compare across forks - change head repository - select your repository
    -see message "able to merge" - clic "create pull request" - confirm click create pull request
    see the pull requests update with your request -----see erors od problems with your pull request, (ex: logo too big - not eligible for automerge - see details)
    correct if errors and create another pull request
