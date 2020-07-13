const {DataTypes} = require('sequelize');

function InitServices(sequelize){
    const Services = sequelize.define('Services', {
    // Model attributes are defined here
        serviceName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return Services;
}
module.exports = {InitServices}