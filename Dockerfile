FROM node:18-alpine

WORKDIR /FeedbagBackendNodeApp

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4000

EXPOSE 4000

CMD ["npm", "run", "start"]