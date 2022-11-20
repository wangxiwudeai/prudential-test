FROM node:lts-alpine 

RUN npm i -g typescript pm2

WORKDIR /www

COPY . /www/
COPY ./run.sh /tmp/run.sh

RUN npm i \
&& npm run build

EXPOSE 80
ENTRYPOINT ["/tmp/run.sh"]