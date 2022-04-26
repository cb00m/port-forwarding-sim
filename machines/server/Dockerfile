# Ubuntu
FROM ubuntu:focal

# Avoid user input
ENV DEBIAN_FRONTEND=noninteractive

# Color terminal
ENV TERM=xterm-color

# Execute update 
RUN 	apt-get -y update && \
	apt-get install -y --no-install-recommends \
		apache2 \
        net-tools \
        openssl \
	&& rm -rf /var/lib/apt/lists/*

#START SSH SERVICE      
ARG SSH_USER=server_user
ARG SSH_USER_PASS=server_password
RUN useradd -m -s /bin/bash -p $(openssl passwd -1 $SSH_USER_PASS) $SSH_USER

RUN service apache2 start

WORKDIR /root

EXPOSE 80