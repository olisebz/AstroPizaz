# Dockerfile for the Database

FROM mariadb:latest

LABEL maintainer="Yanis Meichtry <yanis@meichtry.dev>"

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=zms_pizza_backend
ENV MYSQL_USER=root1
ENV MYSQL_PASSWORD=password

EXPOSE 3306

VOLUME /var/lib/mysql
