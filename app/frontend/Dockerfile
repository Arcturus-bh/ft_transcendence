FROM node:22

WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
# RUN npx tsc
RUN npm install -g serve

EXPOSE 8080


CMD ["serve", "-s", ".", "-l", "8080"]