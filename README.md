# Installation

For run locally it needs a .env file with the following environment variables:

```
DB_PASSWORD=YOUR_DB_PASSWORD_HERE
PORT=YOUR_SERVICE_PORT
ALLOWED_ORIGINS=http://localhost:3000,https://*.example.com
```

ALLOWED_ORIGINS includes a comma separated list for the allowed CORS sites.

To change the database config like server, database and user, the file src/config.js needs to be updated.

Install dependencies npm install or yarn
To start the project run npm run start or yarn start

The database scripts example (remember to change YOUR_DATABASE_NAME, YOUR_USER and YOUR_PASSWORD):

```sql
CREATE DATABASE YOUR_DATABASE_NAME;
CREATE USER 'YOUR_USER'@'%' IDENTIFIED BY 'YOUR_PASSWORD';
GRANT ALL PRIVILEGES ON YOUR_DATABASE_NAME.* TO 'YOUR_USER'@'%';
CREATE TABLE delivery (
     id	int(11) Auto Increment
     nameSet	varchar(255) NULL
     identSet	varchar(255) NULL
     emailSet	varchar(255) NULL
     phoneSet	varchar(255) NULL
     addressStreetSet	varchar(255) NULL
     addressNumberSet	varchar(255) NULL
     addressCitySet	varchar(255) NULL
     datePickup	varchar(255) NULL
     hourPickup	varchar(255) NULL
     width	varchar(255) NULL
     hight	varchar(255) NULL
     weigh	varchar(255) NULL
     nameGet	varchar(255) NULL
     identGet	varchar(255) NULL
     phoneGet	varchar(255) NULL
     addresstreetGet	varchar(255) NULL
     addressnumberGet	varchar(255) NULL
     addressCityGet	varchar(255) NULL
     status	varchar(255) NULL
);
```
