const express = require('express');
const app = express();
const router = require("./routes");

app.use("/", router)

require("dotenv").config();

// config for your database
var config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_HOST,
  database: process.env.SQL_DATABASE
};

// connect to your database
sql.connect(config, function (err) {
  if (err) console.log(err);
});

app.listen(5000, () => console.log('App listen on port 5000'));
