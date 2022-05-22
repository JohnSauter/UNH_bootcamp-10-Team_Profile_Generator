/* A Manager is a type of Employee.  */
const Employee = require("./Employee_class.js");
module.exports = class Manager extends Employee {
    constructor(name, employee_ID, e_mail_address, office_number) {
        super(name, employee_ID, e_mail_address);
        this.officeNumber = office_number;
        this.logo = "Coffee-Cup-Silhouette";
        this.role = "Manager";
    }
    getRole() { return "Manager" };
}
