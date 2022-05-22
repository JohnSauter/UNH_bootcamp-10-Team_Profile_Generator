/* An Engineer is a type of  Employee.  */
const Employee = require("./Employee_class.js");
module.exports = class Engineer extends Employee {
    constructor(name, employee_ID, e_mail_address, github_user_name) {
        super(name, employee_ID, e_mail_address);
        this.github = github_user_name;
        this.logo = "30168";
        this.role = "Engineer";
    }
    getGithub() { return this.github };
    getRole() { return "Engineer" };
}
