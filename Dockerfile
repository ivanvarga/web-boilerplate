FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app


# Install app dependencies
COPY src/client /usr/src/app/client
COPY src/server /usr/src/app/server

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/

EXPOSE 5000
WORKDIR /usr/src/app/server

CMD [ "node", "app.js" ]