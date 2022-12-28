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

const managerQuestions = [
  {
    type: "input",
    message: "Pleasetype in an office number",
    name: "officeNumber",
  },
];

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

// get the questions for the intern and engineer done

// ask them in case the users choose for that specific category

// get tests done for all 4 classes

// get the template done (plain html and bootstrap so you have a model to build

// dynamically build the html page with the answers for your questions

// wrtie the output to file using the fs package (similar to what we've done in previous hw)
