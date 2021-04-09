const inquirer = require("inquirer");
const fs = require("fs");

const generateMD = (answers) =>
  `  
  # ${answers.title}

  ## ${answers.description}
    
  ## Table of Contents
  =================
  * [Usage](#usage)
  * [License](#license)
  * [Installation](#installation)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
 
  # Usage 
  ## ${answers.usage}

  # License
  ## ${answers.license}

  # Installation
  ## ${answers.installation}

  # Contributing 
  ## ${answers.contributing}

  # Tests
  ## ${answers.tests}

  # Questions


  ### Email
   ${answers.email}
  ### Github
  #### ${answers.username}
  #### ${answers.link}
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
      name: "link",
      message: "Enter your github link:",
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
    {
      type: "input",
      name: "usage",
      message: "Enter project Usage Details:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose license type:",
      choices: ["MIT LICENSE", "OTHER"],
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions:",
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter Contribution Details:",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter Tests:",
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
