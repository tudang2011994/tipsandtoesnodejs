const {DataTypes} = require('sequelize');

function InitPackages(sequelize){
    const Packages = sequelize.define('Packages', {
    // Model attributes are defined here
        packageName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
        },
        estimateTime: {
            type: DataTypes.TIME
        }
    }, {
        timestamps: false
    });
    return Packages;
}
module.exports = {InitPackages}