# Latest public official Kali Linux (Rolling) image release
FROM kalilinux/kali-rolling

# Avoid errors from asking for user input
ENV DEBIAN_FRONTEND=noninteractive

# Color terminal for better user experience
ENV TERM=xterm-color

# Prepare the base packages with and some useful tools (just in case, not all of them will be used)
RUN     apt-get -y update && apt-get -y full-upgrade \
        && apt-get install -y --no-install-recommends \
                apt-utils \
                curl \
                iputils-ping \
                nano \
                net-tools \
                wget \
                nmap \
                man \
                tmux \
                gpm \
                mc \
                unzip \
                steghide \
                john \
                exiftool \
                gnupg \
                coreutils \
                openssh-client \
                hydra \
                bzip2 \
                python3 \       
                python3-pip \
                openssh-server \
		openssl \
                socat \
        && rm -rf /var/lib/apt/lists/*

ARG SSH_USER=sniffer_user
ARG SSH_USER_PASS=sniffer_password
RUN useradd -m -s /bin/bash -p $(openssl passwd -1 $SSH_USER_PASS) $SSH_USER

WORKDIR /root

EXPOSE 22