FROM node:14

WORKDIR /src

COPY package*.json ./

RUN npm i

COPY . .

CMD ["sh", "-c", "npm run migrate && npm run seed && npm run dev"]

