// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer.prompt([
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
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
