# Provisioning Examples
This repo contains examples for: 
* Vagrant using Ansible to provision an Apache Server

## Vagrant Example
Requires [Vagrant](https://www.vagrantup.com/docs/installation/) to be installed and [Ansible](http://docs.ansible.com/ansible/intro_installation.html)

Once those tools are in place run the following command in the directory containing the Vagrantfile:

`vagrant up`

It will port forward localhost:8888 to the apache port 80 on the vagratn box so to test: [http://localhost:8888](http://localhost:8888)

## Docker Example
Requires [Docker](https://docs.docker.com/engine/installation/) to be installed. 

Once those tools are in place, from your docker commandline run the following `run.sh` shell script:
`./run.sh`

This Shell script performs the following.

`docker build -t jared_test .
docker run -it --rm -p 8888:8888 --name jared_test_app jared_test`


It will port forward local 8888 to the docker container port 8888: 
[http://192.168.99.100:8888](http://192.168.99.100:8888)
