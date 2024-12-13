FROM ubuntu

WORKDIR /root
RUN mkdir validator
RUN mkdir projects

RUN rm -rf /etc/localtime
RUN ln -s /usr/share/zoneinfo/Europe/Bucharest /etc/localtime
RUN echo 'Europe/Bucharest' > /etc/timezone

RUN apt-get -y update
RUN apt-get install -y vim curl build-essential
#colorscheme delek

RUN curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh -s -- -y
RUN . "$HOME/.cargo/env"

RUN sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"
# add to PATH both cargo (see above $HOME/.cargo/env file) and solana
RUN echo "export PATH=\"$HOME/.cargo/bin:$HOME/.local/share/solana/install/active_release/bin:$PATH\"" >> .bashrc