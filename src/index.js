const inquirer = require("inquirer");
const Manager = require("../src/lib/Manager");
const Engineer = require("../src/lib/Engineer");
const Intern = require("../src/lib/Intern");
const generateHtmlFile = require("./utils/generateHTML");

let employeesArray = [];

const questions = [
  {
    type: "input",
    message: "Employee name:",
    name: "employeeName",
    validate: (name) => {
      if (!name || name.length < 2) {
        return "Please type in a name";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Employee id:",
    name: "employeeId",
  },
  {
    type: "input",
    message: "Email address:",
    name: "employeeEmail",
  },
  {
    type: "list",
    message: "employee role",
    name: "employeeRole",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "Please enter your office number?",
    name: "officeNumber",
  },
];

const engineerQues = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHub",
  },
];

const internQues = [
  {
    type: "input",
    message: "What is your School name?",
    name: "school",
  },
];

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    // destructure answers
    const { employeeName, employeeId, employeeEmail, employeeRole } = answers;

    switch (employeeRole) {
      case "Manager":
        const managerAnswers = await inquirer.prompt(managerQuestions);

        const manager = new Manager(
          employeeName,
          employeeId,
          employeeEmail,
          employeeRole,
          managerAnswers.officeNumber
        );

        employeesArray.push(manager);

        break;

      case "Engineer":
        const engineerAnswers = await inquirer.prompt(engineerQues);
        const engineer = new Engineer(
          employeeName,
          employeeId,
          employeeEmail,
          employeeRole,
          engineerAnswers.gitHub
        );

        employeesArray.push(engineer);
        break;

      case "Intern":
        const internAnswers = await inquirer.prompt(internQues);
        const intern = new Intern(
          employeeName,
          employeeId,
          employeeEmail,
          employeeRole,
          internAnswers.school
        );

        employeesArray.push(intern);
        break;

      default:
    }

    const rerun = await inquirer.prompt({
      type: "list",
      message: "Do you want to add another Employee?",
      name: "addAnotherEmployee",
      choices: ["Yes", "No"],
    });

    if (rerun.addAnotherEmployee === "Yes") {
      init();
    } else if (rerun.addAnotherEmployee === "No") {
      generateHtmlFile(employeesArray);
    }
  } catch (error) {
    console.log(error.message);
  }
};

init();

// get the questions for the intern and engineer done. ask either of these questions when the user chooses the corresponding category

// get tests done for all 4 classes

// get the template done (plain html and bootstrap so you have a model to build

// dynamically build the html page with the answers for your questions

// wrtie the output to file using the fs package (similar to what we've done in previous hw)
