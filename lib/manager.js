const employee = require('employee');

class manager extends employee {
    
    constructor(officenumber) {
        this.officenumber = officenumber;
    }
    
    getRole() {
        return 'manager';
    }
}


module.exports = manager;