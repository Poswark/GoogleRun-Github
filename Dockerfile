ARG DIR=react-app

FROM node:slim AS build
WORKDIR /app
COPY react-app/package*.json ./
RUN npm install --frozen-lockfile
COPY react-app/public ./public
COPY react-app/src ./src
RUN npm run build

# Etapa 2 - Nginx
FROM nginx:stable
USER root
RUN rm -rf /usr/share/nginx/html/*
COPY react-app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html/

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]