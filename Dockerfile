# pull official base image
FROM node:13.12.0-alpine as build-stage

# set working directory
WORKDIR /

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# Copies everything over to Docker environment
COPY . .

# Build for production.
RUN npm run build --production

# Install `serve` to run the application.
RUN npm install -g serve

# Uses port which is used by the actual application
EXPOSE 5000

# Run application
#CMD [ "npm", "start" ]
CMD serve -s build