var _db = require('../db');
require("dotenv").config();

// Connect with database
_db.inItDb();
const db = _db.getDb();
var request = new db.Request();


exports.getAllAccount = (req,res) => {
    request.query('select * from Account', function (err, recordset){
        if(err) console.log(err);

        res.send(recordset);
      })
}

exports.getAccountById = (req,res) => {
    request.query('select * from Account', function (err, recordset){
        if(err) console.log(err);

        res.send(recordset);
      })
}

exports.createAccount = (req,res) => {
    request.query('select * from Account', function (err, recordset){
        if(err) console.log(err);

        res.send(recordset);
      })
}