const {DataTypes} = require('sequelize');

function InitShedules(sequelize){
    const Shedules = sequelize.define('Shedules', {
    // Model attributes are defined here
        TimeIn: {
            type: DataTypes.DATE,
            allowNull: false
        },
        EmployeeId: {
            type: DataTypes.INTEGER,
        },
        Status: {
            type: DataTypes.ENUM(['Ready','Inprogress','Waiting','Busy'])
        }, 
        numberGuest: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    });
    return Shedules;
}
module.exports = {InitShedules}