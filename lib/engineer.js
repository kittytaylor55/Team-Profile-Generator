const employee = require('employee');

class engineer extends employee {
    
    constructor(github) {
        this.github = github;
    }
    
    getRole() {
        return 'engineer';
    }

    getGithub(){
        return this.github;
    }
}


module.exports = engineer;