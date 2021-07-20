FROM node:12

WORKDIR /server

COPY package*.json /server

RUN npm install

EXPOSE 3080

CMD ["npm", "run", "dev"]