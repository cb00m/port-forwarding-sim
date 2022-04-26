# Ubuntu
FROM ubuntu:focal

# Avoid user input
ENV DEBIAN_FRONTEND=noninteractive

# Color terminal
ENV TERM=xterm-color

# Execute update 
RUN apt-get update && apt-get -y full-upgrade \
    && apt-get install -y --no-install-recommends \
        net-tools \
        openssl \
        && rm -rf /var/lib/apt/lists/*

#START SSH SERVICE      
ARG SSH_USER=hiddenserver_user
ARG SSH_USER_PASS=hiddenserver_password
RUN useradd -m -s /bin/bash -p $(openssl passwd -1 $SSH_USER_PASS) $SSH_USER

WORKDIR /root

EXPOSE 22