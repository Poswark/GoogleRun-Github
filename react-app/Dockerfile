FROM node:slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile
COPY public ./public
COPY src ./src
RUN npm run build


### Etapa 2 - Nginx
FROM nginx:stable
USER root
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html/


EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]