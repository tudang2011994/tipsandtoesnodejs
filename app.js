const express = require('express');
const app = express();
const { Sequelize, DataTypes } = require('sequelize');
 let { InitDatabase } = require('./db.js');
InitDatabase();
 
require("dotenv").config();

// config for your database
var config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_HOST,
  database: process.env.SQL_DATABASE
};

// const connection = new Sequelize('db','username',null,{
//   storage: 'D:/Project/NailsApi/tipsandtoesnodejs/db.sqlite',
//   dialect: 'sqlite'
// });

// connection
//   .authenticate()
//     .then(()=> {
//       console.log('Connection to database established successfully');
//     })
//     .catch(err => {
//       console.error('Unable to connect to the database', err);
//     })

//     const User = connection.define('User', {
//       // Model attributes are defined here
//       firstName: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       lastName: {
//         type: DataTypes.STRING
//         // allowNull defaults to true
//       }
//     }, {
//       // Other model options go here
//     });

//     connection.sync();
app.listen(5000, () => console.log('App listen on port 5000'));
