FROM node:12

WORKDIR /server

COPY package*.json /server

RUN npm install

COPY . /server/

EXPOSE 3080

CMD ["npm", "run", "dev"]