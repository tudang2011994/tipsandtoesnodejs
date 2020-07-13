const db = require("../db");

class ShedulesRepository {
    constructor(dbContext) {
      this.dbContext = dbContext; 
    }

    getAll() {
        return this.dbContext.Shedules.findAll();
    }
    getById(id) {
        return this.dbContext.Shedules.findById(id);
    }
    create(shedule) {
        return this.dbContext.Shedules.create({
            TimeIn: shedule.TimeIn,
            EmployeeId: shedule.EmployeeId,
            Status: shedule.Status, 
            numberGuest: shedule.numberGuest,
            UserId: shedule.UserId
        });
    }
    update(shedule,id) {
        return this.dbContext.Shedules.update({
            TimeIn: shedule.TimeIn,
            EmployeeId: shedule.EmployeeId,
            Status: shedule.Status, 
            numberGuest: shedule.numberGuest,
            UserId: shedule.UserId
        }, { where: {
            id: id
        }});
    }
    delete(id) {
        return this.dbContext.Shedules.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = ShedulesRepository;