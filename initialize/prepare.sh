#!/bin/bash
cd ..

sudo ./build.sh -d ./machines/hidden_server
sudo ./build.sh -d ./machines/server
sudo ./build.sh -d ./machines/sniffer

cd initialize
