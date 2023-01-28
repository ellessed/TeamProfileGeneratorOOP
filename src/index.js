const inquirer = require("inquirer");

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
// manager questions

const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your Employee id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Please type in an office number",
    name: "officeNumber",
  },
];
// Intern Questions
const InternQues = [
  {
    type: "input",
    message: "What is the Employee's Name?",
    name: "name",
  },
  {
    type: "input",
    message: "Please provide the Employee's ID number",
    name: "id",
  },
  {
    type: "input",
    message: "Please provide the Employee's email address",
    name: "email",
  },
  {
    type: "input",
    message: "Please provide the Intern's School name",
    name: "school",
  },
];

// Engineer Questions

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);

    switch (answers.employeeRole) {
      case "Manager":
        const managerAnswers = await inquirer.prompt(managerQuestions);

        const myManagerCard = `<div>${managerAnswers.officeNumber}</div>`;
        console.log(myManagerCard);
        break;

      case "Engineer":
        console.log("Youve typed a engineer");
        break;

      case "Intern":
        console.log("Youve chosen an intern");
        break;

      default:
        console.log("Default");
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
