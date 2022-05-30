# Express-API

## Description (Descripción)
REST-API made with Express, Node JS, MariaDB & Sequelize
API Rest programada con Express, NodeJS, MariaDB y Sequelize

General purpose API with Users, that includes user authentication flow for safe endpoints consumption

API de uso general, que cuenta CRUD de usuarios y flujo de autenticación para el consumo de servicios

## Features
- Password Encryption by bcrypt library
- Authorization y refresh token creation using JWT
- Users CRUD
- Middleware to manage safe routes in application

## Características
- Encriptación de contraseñas a través de bcrypt
- Generación de tokens de autorización y refresco con JWT
- CRUD de usuarios
- Middleware para el manejo de rutas seguras

## Guide to implement
- npm install
- npm start (run project)
- npm build (compile distribution)

## Requirements
- You need to install MariaDB before try to run this project
- In root, you need to create a file named '.env', and introduce your database data, like this:

    ```
    PORT = 4000
    DATABASE = {database_name}  
    DB_USER = root  
    DB_PASSWORD = {password}
    ```
- If you want to use a different type of relational database, you can edit sequelize configuration at `./src/database/index.js`

## Requerimientos
- Debes instalar MariaDB antes de probar este proyecto
- En el directorio raíz del proyecto, debes crear un archivo llamado '.env', e introducir en él, el puerto donde arrancará la aplicación y las credenciales para conectar con la base de datos

    ```
    PORT = 4000
    DATABASE = {database_name}  
    DB_USER = root  
    DB_PASSWORD = {password}
    ```
- Si deseas utilizar otro motor de bases de datos sql, puedes hacerlo editando la configuración de sequelize en `./src/database/index.js`