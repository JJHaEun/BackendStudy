FROM node:14


WORKDIR /homeworkFD/
COPY ./package.json /homeworkFD/
COPY ./yarn.lock /homeworkFD/

RUN yarn install

COPY . /homeworkFD/

CMD yarn dev