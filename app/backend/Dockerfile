FROM node:22

WORKDIR /app/backend

# first cpy this for opti
COPY package.json .
COPY package-lock.json .
COPY prisma ./prisma

RUN npm install
RUN npx prisma generate
# RUN mkdir -p prisma && touch prisma/dev.db

# copy the others files / repos
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]