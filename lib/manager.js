const Employee = require("./employee");

class Manager extends Employee {
    
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    }
    
    getRole() {
        return 'manager';
    }
}


module.exports = Manager;