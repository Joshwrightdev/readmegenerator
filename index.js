const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
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
      choices: ["MIT License", "Apache License", "GPL License"],
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
  ]);
};

const generateMd = (answers) =>
  `  
  # ${answers.title}
 
  ## ${answers.description}
    
  # Table of Contents
  
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

  ## Contributing 
  ### ${answers.contributing}

  # Tests
  ## ${answers.tests}

  # Questions


  ## Email
   ${answers.email}
  ## Github
  #### ${answers.username}
  #### ${answers.link}
`;

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync("readme.md", generateMd(answers)))
    .then(() => console.log("Successfully wrote to readme.md"))
    .catch((err) => console.error(err));
};

init();
