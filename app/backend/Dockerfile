FROM node:22

WORKDIR /app/backend

# first cpy this for opti
COPY package.json .
COPY package-lock.json .

RUN npm install

# copy the others files / repos
COPY . .

EXPOSE 3000

CMD ["node", "server.ts"]