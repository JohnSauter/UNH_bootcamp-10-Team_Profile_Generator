/* Team Profile Generator*/

/* Include the packages needed for this application. */
const inquirer = require("inquirer");
const fs = require("fs");

/* Define the classes we will be using to hold information
 * about the team.  */
class Employee {
    /* Managers, Engineers and Interns are Employees.  */
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
class Manager extends Employee {
    constructor(name, employee_ID, e_mail_address, office_number) {
        super(name, employee_ID, e_mail_address);
        this.officeNumber = office_number;
    }
    getRole() { return "Manager" };
}
class Engineer extends Employee {
    constructor(name, employee_ID, e_mail_address, github_user_name) {
        super(name, employee_ID, e_mail_address);
        this.github = github_user_name;
    }
    getGitHub() { return this.github };
    gitRole() { return "Engineer" };
}
class Intern extends Employee {
    constructor(name, employee_ID, e_mail_address, school_name) {
        super(name, employee_ID, e - mail_address);
        this.school = school_name;
    }
    getSchool() { return this.school };
    getRole() { return "Intern" };
}

/* Global variables */
let team_members = [];

/* First we ask the user for information about the team manager.
 * We then loop until the user exits, asking him whether he wants
 * to add an Engineer, add an Intern, or exit.  Thus we have four 
 * sets of questions: manager, choice, engineer and intern.
 */

/* The manager dialogue asks about name, employee ID, e-mail
 * address and office number.
 */
const manager_questions = [
    {
        type: "input",
        name: "manager_name",
        message: "What is the manager's name?",
        default: "",
        validate: function (response) {
            if (response == "") {
                return "You must provide the name of the manager";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "manager_employee_ID",
        message: "What is the manager's employee ID",
        default: "",
        validate: function (response) {
            if (response == "") {
                return "You must provide the employee ID of the manager";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "manager_e_mail_address",
        message: "What is the manager's e-mail address?",
        default: "",
        validate: function (response) {
            if (response == "") {
                return "You must provide the e-mail address of the manager";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "manager_office_number",
        message: "What is the manager's office number?",
        default: "unknown",
    }
]

/* Get the answers to the manager questions.  */
inquirer.prompt(manager_questions)
    .then(answers => process_manager_answers(answers));

function process_manager_answers(answers) {
    /* Create our one and only manager.  */
    const the_manager = new Manager(answers.manager_name, 
        answers.manager_employee_ID,
        answers.manager_e_mail_address, 
        answers.manager_office_number);
    team_members.push(the_manager);
    add_to_team();
}

/* Add to the team until the user says he is done.
 * After adding an Engineer or Intern, we come back here.
 */
function add_to_team () {

    /* Ask the user what he woudl like to do.  */
    const choice_questions = [
        {
            type: "list",
            name: "choice",
            message: "Add an Engineer or Intern to the team, or team is complete",
            choices: ["add an Engineer", "add an Intern", "team is complete"],
            default: "team is complete"
        }
    ];
    inquirer.prompt(choice_questions)
        .then(process_choice_answer);
}

/* Process the response to the choice quesiton.  */
function process_choice_answer(answer) {
    switch (answer.choice) {
        case "add an Engineer":
            add_an_Engineer();
            break;
        case "add an Intern":
            add_an_Intern();
            break;
        case "team is complete":
            complete_team();
            break;
        default:
            break;
    }
}

/* The user wishes to add an Engineer to the team.  */
function add_an_Engineer() {
    add_to_team();
}

/* The user wishes to add an Intern to the team.  */
function add_an_Intern () {
    add_to_team();
}

/* The team is complete.  */
function complete_team () {
    console.log ("team is complete");
}
