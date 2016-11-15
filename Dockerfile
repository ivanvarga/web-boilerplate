FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app


# Install app dependencies
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY app.js /usr/src/app/

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/

EXPOSE 5000
WORKDIR /usr/src/app

CMD [ "node", "app.js" ]