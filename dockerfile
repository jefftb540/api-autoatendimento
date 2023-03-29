FROM node:14

WORKDIR /src

COPY package*.json ./

COPY wait-for.sh ./

RUN npm i

COPY . .

# RUN npm run migrate; npm run seed

CMD ["sh", "-c", "./wait-for.sh db:3306; npm run migrate && npm run seed && npm run dev"]

