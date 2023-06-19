FROM node:14

WORKDIR /mini/
COPY ./package.json /mini/
COPY ./yarn.lock /mini/

RUN yarn install

COPY . /mini/

CMD yarn dev