FROM ubuntu:latest
USER root
RUN apt-get -y update && apt-get -y install vim && apt-get -y install chrome

RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN apt-get -y install nodejs
RUN npm -v
RUN apt update
# COPY /machine-setup.sh /tmp/machine-setup.sh
# RUN ["chmod", "+x", "/tmp/machine-setup.sh"]

# RUN apt install -y wget unzip
# ARG DEBIAN_FRONTEND=noninteractive
# RUN apt-get install -y tzdata
# RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# RUN dpkg -i google-chrome-stable_current_amd64.deb
# RUN apt -f install -y


# Install LXDE and VNC server.
# RUN \
#   apt-get update && \
#   DEBIAN_FRONTEND=noninteractive apt-get install -y lxde-core lxterminal tightvncserver && \
#   rm -rf /var/lib/apt/lists/*


# RUN /tmp/machine-setup.sh
RUN npm i -g @lhci/cli
RUN lhci autorun
CMD ["/bin/true"]