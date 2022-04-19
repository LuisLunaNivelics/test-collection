FROM node:14-buster-slim
COPY package.json .
COPY lighthouserc-ci.js .
COPY lighthouserc.js .
#COPY k6-script_televisa.js .
# Install utilities
RUN apt-get update --fix-missing && apt-get -y upgrade && apt-get install -y git wget gnupg && apt-get clean

# Install latest chrome stable package.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update \
    && apt-get install -y google-chrome-stable --no-install-recommends \
    && apt-get clean
#install k6
#RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
#RUN sh -c 'echo "deb https://dl.k6.io/deb stable main" | tee /etc/apt/sources.list.d/k6.list'
#RUN apt-get update
#RUN apt-get install k6
#RUN k6 help

# Install Lighthouse CI
RUN npm install -g @lhci/cli@0.9.0
RUN npm install -g lighthouse
RUN lhci autorun 
# Setup a user to avoid doing everything as root
RUN groupadd --system lhci && \
  useradd --system --create-home --gid lhci lhci && \
  mkdir --parents /home/lhci/reports && \
  chown --recursive lhci:lhci /home/lhci

USER lhci
WORKDIR /home/lhci/reports

CMD [ "lhci", "--help" ]