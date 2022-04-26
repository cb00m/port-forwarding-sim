# port-forwarding-sim
Port forwarding docker simulation 

FESB - University of Split - Cryptography and network security


## Enviroment

Enviroment composed of 3 machines
  1. Sniffer
  2. Server
  3. Database

## Set-up and statement

Sniffer belongs to the same network as server, and server forwards mysql requests (port 3306) to the database, sharing a back network with it.
When sniffer gets access to the server machine, it could then access the database freely.

## Initializing

The following commands must be run:

```cd initialize```
```chmod +x prepare.sh && ./prepare.sh```
```chmod +x build.sh && ./build.sh```

## Entering machines

The following commands must be run:

```cd enterMachines```
```chmod +x enterSniffer.sh && ./enterSniffer.sh```
