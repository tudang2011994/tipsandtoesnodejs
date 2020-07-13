const db = require("../db");

class PackagesRepository {
    constructor(dbContext) {
      this.dbContext = dbContext; 
    }

    getAll() {
        return this.dbContext.Packages.findAll();
    }
    getById(id) {
        return this.dbContext.Packages.findById(id);
    }
    create(package) {
        return this.dbContext.Packages.create({
            packageName: package.packageName,
            price: package.price,
            estimateTime: package.estimateTime
        });
    }
    update(package,id) {
        return this.dbContext.Packages.update({
            packageName: package.packageName,
            price: package.price,
            estimateTime: package.estimateTime
        }, { where: {
            id: id
        }});
    }
    delete(id) {
        return this.dbContext.Packages.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = PackagesRepository;