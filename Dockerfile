FROM mhart/alpine-node:9

WORKDIR /srv

ADD package.json .
ADD yarn.lock .

RUN yarn

ADD . .

RUN yarn build

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "server/index.js"]
