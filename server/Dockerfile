FROM node:12

WORKDIR /express-server

COPY package*.json /express-server

RUN npm install

COPY . /express-server/

EXPOSE 3080

CMD ["npm", "run", "dev"]