const { Sequelize, DataTypes } = require('sequelize');

let _connection

function InitDatabase() {
    //Connect to database 
    _connection = new Sequelize('db','username',null,{
        storage: 'D:/Project/NailsApi/tipsandtoesnodejs/db.sqlite',
        dialect: 'sqlite'
      });

    //Check database connection
    checkConnection();
}

function checkConnection(){
_connection
  .authenticate()
    .then(()=> {
      console.log('Connection to database established successfully');
    })
    .catch(err => {
      console.error('Unable to connect to the database', err);
    })
}

//Define database structure
function setupDatabaseSchema() {
  
}

module.exports =  { InitDatabase,
                    connection: _connection }  