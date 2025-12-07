FROM node:22

COPY . .

RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 8080


CMD ["serve", "-s", ".", "-l", "8080"]