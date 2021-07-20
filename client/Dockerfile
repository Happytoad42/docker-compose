FROM node:12

WORKDIR /client

COPY package*.json /client

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]