const db = require("../db");

class UserRepository {
    constructor(userContext) {
      this.userContext = userContext; 
    }

    getAll() {
        return this.userContext.User.findAll();
    }
    getById(id) {
        return this.userContext.User.findById(id);
    }
    create(user) {
        return this.userContext.User.create({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            phoneNumber: user.phoneNumber,
            RoleId: user.roleid
        });
    }
    update(user,id) {
        return this.userContext.User.update({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            phoneNumber: user.phoneNumber,
            RoleId:  parseInt(user.roleid) 
        }, { where: {
            id: id
        }});
    }
    delete(id) {
        return this.userContext.User.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = UserRepository;