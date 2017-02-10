FROM node:7.1.0
MAINTAINER Marc Lacoursiere

RUN mkdir /var/www

ADD index.js /var/www/index.js
ADD package.json /var/www/package.json

RUN cd /var/www && npm install

CMD ["/usr/local/bin/node", "/var/www/index.js"]

