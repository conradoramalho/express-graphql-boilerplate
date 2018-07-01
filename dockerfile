FROM node:10.4.1

ENV TZ=America/Sao_Paulo

RUN echo 'America/Sao_Paulo' > /etc/timezone && \
  apt-get update

WORKDIR /usr/src/app

COPY package*.json  yarn.lock ./

RUN npm i -g yarn

RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "production" ]