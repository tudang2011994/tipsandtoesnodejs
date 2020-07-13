const db = require("../db");

class ServicesRepository {
    constructor(dbContext) {
      this.dbContext = dbContext; 
    }

    getAll() {
        return this.dbContext.Services.findAll();
    }
    getById(id) {
        return this.dbContext.Services.findById(id);
    }
    create(services) {
        return this.dbContext.Services.create({
            serviceName: services.serviceName
        });
    }
    update(shedule,id) {
        return this.dbContext.Services.update({
            serviceName: services.serviceName
        }, { where: {
            id: id
        }});
    }
    delete(id) {
        return this.dbContext.Services.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = ServicesRepository;