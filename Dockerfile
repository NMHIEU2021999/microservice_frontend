FROM node:16

WORKDIR /home

COPY . .

RUN npm install

EXPOSE 8079

CMD [ "node", "server.js" ]