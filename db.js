var sql = require('mssql');
const { request } = require('express');
require("dotenv").config();

// config for your database
var config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_HOST, 
    database: process.env.SQL_DATABASE        
};
let _db;

function inItDb(){
    sql.connect(config);
    _db = sql;
}

// Get DbContext
function getDb() { 
    return _db;
}   

module.exports = {
    getDb,
    inItDb
};