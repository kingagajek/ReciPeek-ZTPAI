# ReciPeek - Recipe Search and Management Application

## Table of Contents
- [About](#about)
- [Technology Stack](#technology-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [System Actors](#system-actors)
- [ERD Diagram](#erd-diagram)
- [Screenshots](#screenshots)
- [Credits](#credits)

## About
ReciPeek is a web application for searching and managing. Users can discover recipes, filter them by various criteria, rate them, and add their own recipes. The application also supports user authentication, allowing users to log in and access additional features.

## Technology Stack
- [React](https://reactjs.org/)
- [Spring Boot 3](https://spring.io/projects/spring-boot)
- [PostgreSQL](https://www.postgresql.org/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [Docker](https://www.docker.com/)

## Requirements
- [Docker](https://www.docker.com/) installed on your machine.
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your machine.
- [Java 17](https://openjdk.java.net/projects/jdk/17/) installed on your machine.

## Installation
1. Open a terminal in the main project folder.
2. Run the command:
   ```bash
   docker-compose up
   ```
3. Open a terminal in /backend folder
4. Run commands
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
5. Access the backend application in at `localhost:8080`.
6. Open a terminal in the /frontend folder.
7. Run the following commands:
   ```bash
   npm i
   npm run start
   ```
8. Open web application at `localhost:3000`

## System Actors
- **Admin:** Manages recipes, ingredients, diets, cuisines, meal types and user accounts.
- **User:** Can search for recipes, filter results, rate recipes, and add their own recipes.
- **Unauthorized:** Can search for recipes and view details.

## ERD Diagram
![diagram-ERD-ReciPeek](https://github.com/kingagajek/ReciPeek-ZTPAI/assets/121556990/28614778-554e-4211-979a-31c5a57b99f7)

## Screenshots
- **Home Page:**
  ![image](https://github.com/kingagajek/ReciPeek-ZTPAI/assets/121556990/38f885e6-3985-40d1-93c3-997e738375ee)
  ![image](https://github.com/kingagajek/ReciPeek-ZTPAI/assets/121556990/0af3a0e8-dbf9-4ba6-9864-502775c62657)
  
- **Recipe Search:**
  ![image](https://github.com/kingagajek/ReciPeek-ZTPAI/assets/121556990/75059e70-526f-4b63-bba3-abea4cf7fd5c)

  ![image](https://github.com/kingagajek/ReciPeek-ZTPAI/assets/121556990/8cab6672-765c-40fc-97da-6d1cbdf09e21)

- **Recipe Details Page:**
  ![image](https://github.com/kingagajek/ReciPeek-ZTPAI/assets/121556990/8a2f4e86-9797-4f8c-995d-2da308e693aa)
  ![image](https://github.com/kingagajek/ReciPeek-ZTPAI/assets/121556990/974f5a60-6853-4e63-bdf9-0e669ed75cca)

- **Add Recipe Page:**
  ![image](https://github.com/kingagajek/ReciPeek-ZTPAI/assets/121556990/bc3f099d-9c35-47a7-9dd6-cc791e5d8f68)
  ![image](https://github.com/kingagajek/ReciPeek-ZTPAI/assets/121556990/39d9afb8-62d8-49b3-b0bd-78d81a1f893d)

- **Admin Dashboard:**
  ![image](https://github.com/kingagajek/ReciPeek-ZTPAI/assets/121556990/7a5c334c-9c52-4bb4-9d74-dc43c85c29f7)
  ![image](https://github.com/kingagajek/ReciPeek-ZTPAI/assets/121556990/64a7c2e3-46c5-410d-b939-c3a4efc8e01d)

## Credits

This project was developed and designed by [Kinga Gajek](https://github.com/)

Contack:
- [Linked-in](www.linkedin.com/in/kinga-gajek)
- Email: kinga.gajek@interia.pl
