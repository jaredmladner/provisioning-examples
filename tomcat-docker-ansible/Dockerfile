FROM centos:centos6.7

# Add packages
RUN yum update -y 
RUN yum install -y epel-release
RUN yum install -y ansible
RUN yum install -y tar
RUN yum install -y system-config-services

ADD ./tomcat-standalone /home/ansible/tomcat-standalone
RUN ansible-playbook -i "localhost," -c local /home/ansible/tomcat-standalone/site.yml

EXPOSE 8888
