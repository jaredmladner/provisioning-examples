# Provisioning Examples
This repo contains examples for: 
* Vagrant using Ansible to provision an Apache Server

## Vagrant
Requires (Vagrant)[https://www.vagrantup.com/docs/installation/] to be installed and (Ansible)[http://docs.ansible.com/ansible/intro_installation.html]

Once those tools are in place run the following command in the directory containing the Vagrantfile:
`vagrant up`
It will port forward localhost:8888 to the apache port 80 on the vagratn box so to test: http://localhost:8888
