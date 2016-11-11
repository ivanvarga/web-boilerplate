FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY public /usr/src/app/
COPY src /usr/src/app/
COPY app.js /usr/src/app/

RUN npm install

EXPOSE 5000
CMD [ "npm", "start" ]