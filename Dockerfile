FROM node:latest

RUN npm install -g vue-cli

WORKDIR /usr/project

CMD /bin/bash
