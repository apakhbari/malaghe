FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm config set proxy http://fodev.org:8118
RUN npm config set https-proxy http://fodev.org:8118
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]