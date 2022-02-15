# pull official base image
FROM node:13.12.0-alpine as build-stage

# set working directory
WORKDIR /

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]