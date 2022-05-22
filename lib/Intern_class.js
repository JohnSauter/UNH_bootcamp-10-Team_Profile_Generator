/* An Intern is a type of Employee.  */
const Employee = require("./Employee_class.js");
module.exports = class Intern extends Employee {
    constructor(name, employee_ID, e_mail_address, school_name) {
        super(name, employee_ID, e_mail_address);
        this.school = school_name;
        this.logo = "Education_Student_8";
        this.role = "Intern";
    }
    getSchool() { return this.school };
    getRole() { return "Intern" };
}
