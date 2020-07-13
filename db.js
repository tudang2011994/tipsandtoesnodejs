const { Sequelize, DataTypes } = require('sequelize');
const { InitUser } = require('./Model/UserModel.js');
const { InitRoles } = require('./Model/RolesModel.js');
const { InitServices } = require('./Model/ServicesModels.js');
const { InitPackages } = require('./Model/PackagesModel.js');
const { InitShedules } = require('./Model/ScheduleModel.js');
var db = {}

//Connect to database 
var sequelize = new Sequelize('NailsDB','sa','abcd1234',{
    host: 'localhost',
    dialect: 'mssql'
});
checkConnection();
setupDatabase();
setupAssociation();

function checkConnection(){
sequelize
  .authenticate()
    .then(()=> {
      console.log('Connection to database established successfully');
    })
    .catch(err => {
      console.error('Unable to connect to the database', err);
    })
}

function setupDatabase(){
    const User = InitUser(sequelize);
    db.User = User;
    const Roles = InitRoles(sequelize);
    db.Roles = Roles;
    const Services = InitServices(sequelize);
    db.Services = Services;
    const Packages = InitPackages(sequelize);
    db.Packages = Packages;
    const Shedules = InitShedules(sequelize);
    db.Shedules = Shedules;
}

function setupAssociation(){
    db.User.Roles = db.User.belongsTo(db.Roles,{ as: 'RolesRef', foreignKey: 'RoleId'});
    db.User.Services =db.User.belongsToMany(db.Services, { through: 'UserService' });
    db.Services.belongsToMany(db.User, { through: 'UserService' });
    db.Packages.Services = db.Packages.belongsToMany(db.Services, { through: 'ServicePackage' });
    db.Services.belongsToMany(db.Packages, { through: 'ServicePackage' });
    db.Shedules.User = db.Shedules.belongsTo(db.User, { as: 'ShedulesRef', foreignKey: 'UserId'});
    db.Packages.Shedules = db.Packages.belongsToMany(db.Shedules, { through: 'SchedulePackage' });
    db.Shedules.belongsToMany(db.Packages, { through: 'SchedulePackage' });
}

db.sequelize = sequelize;

module.exports =  { db }  