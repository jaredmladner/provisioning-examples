FROM centos:centos6.7

# Add packages
RUN yum install -y epel-release
RUN yum install -y ansible
RUN yum install -y nodejs
RUN yum install -y npm

RUN mkdir /opt/node

ADD ./server.js /opt/node/server.js
ADD ./package.json /opt/node/package.json
ADD ./node.yml /home/ansible/node.yml

EXPOSE 8888
