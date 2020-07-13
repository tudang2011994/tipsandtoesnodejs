const express = require('express');
const app = express();
const { db } = require('./db.js');
const users = require('./Controller/UserController.js');
const schedule = require('./Controller/SheduleController.js');
const services = require('./Controller/ServicesController.js');
const packages = require('./Controller/PackagesController.js');
const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/user',users);
app.use('/schedule',schedule);
app.use('/services',services);
app.use('/packages',packages)

//Init database get connection context
db.sequelize.sync({ force: false }).then(() => {
  app.listen(5000, () => console.log('App listen on port 5000'));
});

