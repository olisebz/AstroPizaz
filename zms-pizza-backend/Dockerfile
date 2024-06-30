# Dockerfile for the zms-pizza-backend

FROM openjdk:20-jdk-alpine

LABEL maintainer="Yanis Meichtry <yanis@meichtry.dev>"

WORKDIR /app

COPY target/zms-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENV SPRING_DATASOURCE_URL=jdbc:mariadb://mariadb:3306/zmsdb
ENV SPRING_DATASOURCE_USERNAME=root1
ENV SPRING_DATASOURCE_PASSWORD=password

ENTRYPOINT ["java", "-jar", "app.jar"]
