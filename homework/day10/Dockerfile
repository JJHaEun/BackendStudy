FROM node:14

WORKDIR /day10Node/
COPY ./package.json /day10Node/
COPY ./yarn.lock /day10Node/

RUN yarn install

COPY . /day10Node/

CMD yarn dev