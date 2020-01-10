FROM centos:7

RUN useradd coder
RUN mkdir -p /home/coder

## Setup baseline 
RUN  \
    yum  -y update && \ 
    yum install -y epel-release && \
    yum install -y rpm-build perl-ExtUtils-MakeMaker make

COPY . /home/coder/code
WORKDIR /home/coder/code

RUN mkdir rpmbuild && cd rpmbuild && \
    mkdir BUILD BUILDROOT RPMS SOURCES SPECS SRPMS TMP && \
    cd .. && perl Makefile.PL 


RUN chown -R coder /home/coder

USER coder 

CMD make rpm 

