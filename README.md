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
```
docker build -t jared_test .

docker run -it --rm -p 8888:8888 --name jared_test_app jared_test
```
It will port forward local 8888 to the docker container port 8888: 
[http://192.168.99.100:8888](http://192.168.99.100:8888)

## Cloudformation Example
Request AWS CLI and your account to be properly configured for AWS Cloudformation/CLI
```
aws cloudformation create-stack  --stack-name jared-test 
--template-url https://raw.githubusercontent.com/jaredmladner/provisioning-examples/master/cloudformation/jared-test.template 
--parameters  ParameterKey=KeyName,ParameterValue=${your.key.name} ParameterKey=InstanceType,ParameterValue=t1.micro`
```
You can run `aws cloudformation list-stacks` to determine when the stack is complete.
Once the stack is complete then run the `describe-stacks` to see the final URL: 
`aws cloudformation describe-stacks`.
The output sections should the URL of the website if successful; similar to the output below:
```
{
    "Stacks": [
        {
            "StackId": "arn:aws:cloudformation:us-east-1:187616233487:stack/jared-test/d8701530-c475-11e5-89a2-500c2866f062", 
            "Description": "AWS CloudFormation Single_Instance: Create an Apache HTTPD Server using a single EC2 instance. This template demonstrates using the AWS CloudFormation bootstrap scripts to install the packages and files necessary to deploy the Apache web server. **WARNING** This template creates an Amazon EC2 instance. You will be billed for the AWS resources used if you create a stack from this template.", 
            "Parameters": [
                {
                    "ParameterValue": "0.0.0.0/0", 
                    "ParameterKey": "SSHLocation"
                }, 
                {
                    "ParameterValue": "jared-key-pair-east", 
                    "ParameterKey": "KeyName"
                }, 
                {
                    "ParameterValue": "t1.micro", 
                    "ParameterKey": "InstanceType"
                }
            ], 
            "Tags": [], 
            "Outputs": [
                {
                    "Description": "URL for newly created LAMP stack", 
                    "OutputKey": "WebsiteURL", 
                    "OutputValue": "http://ec2-54-164-151-193.compute-1.amazonaws.com"
                }
            ], 
            "CreationTime": "2016-01-26T21:43:32.624Z", 
            "StackName": "jared-test", 
            "NotificationARNs": [], 
            "StackStatus": "CREATE_COMPLETE", 
            "DisableRollback": false
        }
    ]
}
```
