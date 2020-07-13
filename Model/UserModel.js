const {DataTypes} = require('sequelize');

function InitUser(sequelize){
    const User = sequelize.define('User', {
    // Model attributes are defined here
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING
        }

    }, {
    // Other model options go here
    });
    return User;
}

module.exports = {InitUser}