const employee = require('employee');

class intern extends employee {
    
    constructor(school) {
        this.school = school;
    }
    
    getRole() {
        return 'intern';
    }
    getSchool() {
        return 'school'
    }
}

module.exports = intern;


