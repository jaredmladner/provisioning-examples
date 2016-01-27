FROM centos:centos6.7

# Add packages
RUN yum install -y epel-release
RUN yum install -y nodejs
RUN yum install -y npm

RUN mkdir /opt/node

COPY ./server.js /opt/node/server.js
COPY ./package.json /opt/node/package.json

EXPOSE 8888
