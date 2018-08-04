FROM node:10.4.1

ENV TZ=America/Sao_Paulo

RUN echo 'America/Sao_Paulo' > /etc/timezone && \
  apt-get update

WORKDIR /usr/src/app

COPY package*.json  package.lock ./

RUN npm install

COPY . .

RUN yarn build

CMD [ "npm", "start" ]
