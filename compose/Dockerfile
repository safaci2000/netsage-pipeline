FROM centos:7

COPY grnoc7.repo /etc/yum.repos.d/grnoc7.repo 

## Setup baseline 
RUN  \
    yum  -y update && \ 
    yum install -y epel-release && \
    yum install -y grnoc-netsage-deidentifier python-pip
##Devel tools 
RUN yum install -y vim  && pip install pika
COPY netsage_shared.xml /etc/grnoc/netsage/deidentifier/ 
COPY netsage_deidentifier.xml /etc/grnoc/netsage/deidentifier/
COPY logging.conf /etc/grnoc/netsage/deidentifier/ 

#COPY Pipeline.pm  /usr/share/perl5/vendor_perl/GRNOC/NetSage/Deidentifier/Pipeline.pm

RUN mkdir /data; chown 777 /data

## Exposed but likely not needed
VOLUME /var/cache/netsage/

#Data volume 
VOLUME /data
## Config exposed
VOLUME /etc/grnoc/netsage/

CMD netsage-netflow-importer-daemon --nofork  --config /etc/grnoc/netsage/deidentifier/netsage_netflow_importer.xml --sharedconfig /etc/grnoc/netsage/deidentifier/netsage_shared.xml