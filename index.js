const inquirer = require("inquirer");
const fs = require("fs");

const generateMD = (answers) =>
  ` ${answers.username} ${answers.title}${answers.email} ${answers.description}
`;

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your github Username:",
    },
    {
      type: "input",
      name: "title",
      message: "Enter your project title :",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Email:",
    },
    {
      type: "input",
      name: "description",
      message: "Enter project description/details:",
    },
  ])
  .then((answers) => {
    const mdPageContent = generateMD(answers);

    fs.writeFile("readme.md", mdPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created ReadMe File!")
    );
  });

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
