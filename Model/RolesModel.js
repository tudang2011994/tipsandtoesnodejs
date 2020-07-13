const {DataTypes} = require('sequelize');

function InitRoles(sequelize){
    const Roles = sequelize.define('Roles', {
    // Model attributes are defined here
        rolename: {
            type: DataTypes.STRING,
            allowNull: false
        }             
    }, {
        timestamps: false
    });
    return Roles;
}
module.exports = {InitRoles}