const Employee = require("./employee");

class Manager extends Employee {
    
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    }
    
    getRole() {
        return 'manager';
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
        <li class="list-group-item">${this.officenumber}</li>
        </ul>
        </div>
        </div>`;
    }
}


module.exports = Manager;