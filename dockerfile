# FROM node:14.16.1-alpine3.10
# RUN npm install
# RUN mkdir /root/data
# COPY src /root/data

FROM node:12.18-alpine
WORKDIR /app
COPY package.json ./
# Create app directory
RUN npm install
# Copy app source code
COPY . ./
#Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]