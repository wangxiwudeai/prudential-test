FROM node:lts-alpine AS node

COPY . /usr/react/app

WORKDIR /usr/react/app

RUN yarn \
&& yarn build

FROM nginx
COPY --from=node /usr/react/app/dist /www/react/app
COPY ./default.conf /etc/nginx/conf.d/default.conf


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]