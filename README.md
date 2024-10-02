## Basic Sol setup

## _Dependencies - Rancher Desktop_

```sh
docker run -it --name mycontainer almalinux /bin/bash
```

#### Update

```sh
dnf update
dnf group install "Development Tools" -y
```

#### Install rust

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
```

> Note: `During the Rust installation, there is usually a prompt asking if you want to add Rust to your PATH. If you missed it, you might need to add it manually.`

#### Update PATH

```sh
. "$HOME/.cargo/env"
exit
```

#### Relog & check

```sh
rustc --version
cargo --version
```

#### install solana CLI

```sh
sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"
```

> `Close and reopen your terminal to apply the PATH changes or run the following in your existing shell:`

```sh
export PATH="/root/.local/share/solana/install/active_release/bin:$PATH"
```

> will not work, so edit:  
> vi /root/.bashrc  
> paste new line  
> `export PATH="/root/.local/share/solana/install/active_release/bin:$PATH"`  
> and relog for check  
> will apply for the next path definitions

#### check

```sh
solana --version
```

#### Install Anchor CLI

#### Install AVM - allows you to install and manage different Anchor versions

> Note: `If you encounter the error type annotations needed for Box<\_> when installing the Anchor CLI, try changing your Rust version to 1.79.0 and attempt the installation again.`
> --------> install Rust 1.79.0:

```sh
rustup default 1.79.0
```

#### Install AVM

```sh
cargo install --git https://github.com/coral-xyz/anchor avm --force
```

#### Install the latest version of Anchor CLI using AVM

```sh
avm install latest
avm use latest
```

> `warning: be sure to add `/root/.avm/bin` to your PATH to be able to run the installed binaries`

```sh
export PATH="/root/.avm/bin:$PATH"
```

> will not work, so edit:  
> vi /root/.bashrc  
> paste new line  
> `export PATH="/root/.avm/bin:$PATH"`  
> and relog for check

#### check

```sh
avm --version
anchor --version
```

#### NVM + Node installation

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

> Close and reopen your terminal to start using nvm or run the following to use it now:  
> export NVM_DIR="$HOME/.nvm"  
> ---------------> relog & check, works

#### check

```sh
command -v nvm
```

#### Install node & check

```sh
nvm install node
node --version
```

#### install Yarn & check

```sh
npm install --global yarn
yarn --version
```

## Docker make image from container (running container my-running-container):

> https://www.dataset.com/blog/create-docker-image/

> #stop my-running-container (otherwise see commmit with pause clause)

```sh
docker commit my-running-container
tag e0caec570ba9 my_resulting_image
docker history my_resulting_image
```

#### export image:

```sh
docker save my_resulting_image -o my_export_base.tar
```

#### import image:

```sh
docker load -i my_export_base.tar
```

> after import: `docker run -it --name testing1 my_export_base /bin/bash`

#### cleanup after containers, images removal --> srhink virtual disk size

stop Rancher Desktop, then

_Windows_

```sh
diskpart
select vdisk file="C:\Users\zzzzzuser\AppData\Local\rancher-desktop\distro-data\ext4.vhdx"
compact vdisk
exit
```
_Linux_
> location: `/home/user/.local/share/rancher-desktop/lima/0`

```sh
qemu-img convert -f raw -O qcow2 diffdisk diffdisk_tmp
```
> delete diffdisk, rename diffdisk_tmp to diffdisk

> nu functioneaza  
> foldere implicate ce au trebuit sterse:  
> /home/user/.local/share/rancher-desktop  
> /home/user/.config/Rancher Desktop  
> /home/user/.docker  
> /home/user/.cache/rancher-desktop  
> /home/user/.rd

## Video adnotations

## _decription narration_

1. create cryptocurrency wallet / install solana tools sh -c "$(curl... / relog from terminal in order to env vars to be updated ----already done-----  
   create wallet:

```sh
solana-keygen new
```

private key stored in /root/.config/solana/id.json  
pubkey on screen (wallet`s address)  
recovery phrase on screen  
check balance:

```sh
solana balance
```

send money to this wallet

2. install rust: curl https://sh.rustup.rs// / relog from terminal in order to env vars to be update / -- libudev-dev libssl-dev pkg-config (ubuntu) build-essential
3. for tokens install solana token program / cargo install spl-token-cli ----already done-----
4. create token

```sh
spl-token create-token
```

> response: Creating token ######token address##########

solana balance changed (fee on creating token)

5. create account that can hold that token

```sh
spl-token create-account ######token address##########
```

> response: Creating account ######token account##########

solana balance changed (fee on creating token account)

6. fill account with tokens
   minting tokens

```sh
spl-token mint ######token address########## 1000000000 ######token account##########
```

7. view token account:

```sh
spl-token accounts
```

8. transfer token to a new account:

```sh
spl-token transfer --fund-recipient --allow-unfunded-recipient ######token address########## 1000 ######destination wallet address##########
```

> note: `--fund-recipient ... - fund the creation of an account for the wallet i am sending to` > `walletul (accountul) nou creat (phantom) nu va avea by default un account pentru tokenul nostru - trebuie creat deci trimitem tokens si platim crearea noului cont pentru acest token`  
> check new wallet for presence of the new token  
> check transactions on solscan.io - search ######token address########## 9. name token  
> add token to solana registry - github  
> name, symbol, logo (png square, under 200Kb - github? (raw github url)  
> solana tokenlist github page  
> for mainnet token:  
> login github  
> https://github.com/solana-labs/token-list - fork  
> open repo - in browser hit "." (launch inbrowser visual studio code) and make changes:  
> assets: make new folder - name with #####token address##########  
> right click the new created folder - upload - upload the logo - 'logo.png'  
> src - tokens - solana.tokenlist.json: add at bottom object with your token details  
> in left tab source control, commit the 2 changes: message: adding ....(name, whatever) token - commit  
> go back to solana-labs prject/repo - pull requests - new pull request - compare across forks - change head repository - select your repository  
> see message "able to merge" - clic "create pull request" - confirm click create pull request  
> see the pull requests update with your request -----see erors od problems with your pull request, (ex: logo too big - not eligible for automerge - see details)  
> correct if errors and create another pull request
