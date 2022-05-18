/* Employee is the parent class for Manager, Engineer and Intern. */
module.exports = class Employee {
    constructor(name, employee_ID, e_mail_address) {
        this.name = name;
        this.id = employee_ID;
        this.email = e_mail_address;
    }
    getName() { return this.name };
    getId() { return this.id };
    getEmail() { return this.email };
    getRole() { return "Employee" };
}
