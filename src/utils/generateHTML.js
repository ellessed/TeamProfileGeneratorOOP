const writeToFile = require("./writeToFile");
const path = require("path");

const generateHtmlFile = (employeesArr) => {
  const OUTPUT_DIR = path.resolve(__dirname, "../dist");
  const outputPath = path.join(OUTPUT_DIR, "team-profile.html");
  let cardsArray = [];

  const generateEmployeeCard = (employee) => {
    let specialDiv;
    switch (employee.role) {
      case "Manager":
        specialDiv = `<div class="card-text">Office Number: <span> ${employee.officeNumber} </span></div>`;
        break;
      case "Engineer":
        specialDiv = `<div class="card-text">GitHub: <span> ${employee.gitHub} </span></div>`;
        break;
      case "Intern":
        specialDiv = `<div class="card-text">School: <span> ${employee.school} </span></div>`;
        break;
      default:
        break;
    }

    const employeeCard = `
  <div class="card m-2" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${employee.role}</h5>

      <div class="card-text">Name: <span> ${employee.name} </span></div>
      <div class="card-text">Id: <span> ${employee.id} </span></div>
      <div class="card-text">Email: <span> ${employee.email} </span></div>
      ${specialDiv}
    </div>
  </div>`;

    cardsArray.push(employeeCard);
  };

  employeesArr.map((employee) => {
    generateEmployeeCard(employee);
  });

  const generatedPage = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bootstrap demo</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <header>
          <h1 class="text-center">Team profile generator</h1>
        </header>
        <div
          class="container d-flex flex-wrap justify-content-around align-items-center p-2 mt-5"
        >
        ${cardsArray.join("")}
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
    `;

  writeToFile(outputPath, generatedPage);
};

module.exports = generateHtmlFile;
