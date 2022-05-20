/* Team Profile Generator*/

/* Include the packages needed for this application. */
const inquirer = require("inquirer");
const fs = require("fs");
const mustache = require("mustache");

/* Define the classes we will be using to hold information
 * about the team members.  */
const Engineer = require("./lib/Engineer_class");
const Intern = require("./lib/Intern_class");
const Manager = require("./lib/Manager_class");

/* An object with one property, which is a list of employees. 
 * This is a convenient structure to feed to mustache. */
let team_members = { employees: [] };

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
        message: "What is the manager's employee ID?",
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
    team_members.employees.push(the_manager);
    add_to_team();
}

/* Add to the team until the user says he is done.
 * After adding an Engineer or Intern, we come back here.
 */
function add_to_team() {

    /* Ask the user what he would like to do.  */
    const choice_questions = [
        {
            type: "list",
            name: "choice",
            message: "Would you like to add an Engineer or Intern " +
                "to the team, or is the team complete?",
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
            add_an_intern();
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
    /* The Engineer dialogue asks about name, employee ID, e-mail
     * address and GitHub user name.
     */
    const engineer_questions = [
        {
            type: "input",
            name: "engineer_name",
            message: "What is the Engineer's name?",
            default: "",
            validate: function (response) {
                if (response == "") {
                    return "You must provide the name of the Engineer.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "engineer_employee_ID",
            message: "What is the Engineer's employee ID?",
            default: "",
            validate: function (response) {
                if (response == "") {
                    return "You must provide the employee ID of the Engineer.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "engineer_e_mail_address",
            message: "What is the Engineer's e-mail address?",
            default: "",
            validate: function (response) {
                if (response == "") {
                    return "You must provide the e-mail address of the Engineer.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "engineer_github_user_name",
            message: "What is the Engineer's GitHub user name?",
            default: "",
        }
    ];

    /* Get the answers to the Engineer questions.  */
    inquirer.prompt(engineer_questions)
        .then(answers => process_engineer_answers(answers));
}

function process_engineer_answers(answers) {
    /* Add this Engineer to the team.  */
    const the_engineer = new Engineer(answers.engineer_name,
        answers.engineer_employee_ID,
        answers.engineer_e_mail_address,
        answers.engineer_github_user_name);
    team_members.employees.push(the_engineer);
    add_to_team();
}

/* The user wishes to add an intern to the team.  */
function add_an_intern() {
    /* The Intern dialogue asks about name, employee ID, e-mail
     * address and school name.
     */
    const intern_questions = [
        {
            type: "input",
            name: "intern_name",
            message: "What is the intern's name?",
            default: "",
            validate: function (response) {
                if (response == "") {
                    return "You must provide the name of the intern.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "intern_employee_ID",
            message: "What is the intern's employee ID?",
            default: "",
            validate: function (response) {
                if (response == "") {
                    return "You must provide the employee ID of the intern.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "intern_e_mail_address",
            message: "What is the intern's e-mail address?",
            default: "",
            validate: function (response) {
                if (response == "") {
                    return "You must provide the e-mail address of the intern.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "intern_school_name",
            message: "What is the name of the intern's school?",
            default: "",
        }
    ];

    /* Get the answers to the Intern questions.  */
    inquirer.prompt(intern_questions)
        .then(answers => process_intern_answers(answers));
}

function process_intern_answers(answers) {
    /* Add this intern to the team.  */
    const the_intern = new Intern(answers.intern_name,
        answers.intern_employee_ID,
        answers.intern_e_mail_address,
        answers.intern_school_name);
    team_members.employees.push(the_intern);
    add_to_team();
}

/* The team is complete.  We read in the template HTML file,
 * edit it using mustache, then write out the results of the edit
 * as the resulting HTML file.  
 */
function complete_team() {
    const template = fs.readFileSync("./src/index.html.in", "utf8");
    const rendered_html = mustache.render(template, team_members);
    fs.writeFileSync("./dist/index.html", rendered_html);
}
