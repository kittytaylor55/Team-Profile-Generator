const Employee = require("./employee");

class Engineer extends Employee {
    
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    
    getRole() {
        return 'engineer';
    }

    getGithub(){
        return this.github;
    }

    getCard() {
        return `<div class="col">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="card-title">${this.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.id}</li>
        <li class="list-group-item">${this.email}</li>
        <li class="list-group-item">${this.getGithub()}</li>
        </ul>
        </div>
        </div>`;
    }
}


module.exports = Engineer;