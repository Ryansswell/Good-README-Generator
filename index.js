const inquirer = require("inquirer");
const fs = require("fs");

const ReadMe = (answers) => `Professional README.md
## Description
${answers.description}
## License
![ISC License](https://img.shields.io/static/v1.svg?label=License&message=${answers.License}&color=yellow)
## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. ${answers.Installation}
## Usage
Provide instructions and examples for use. Include screenshots as needed.
${answers.Usage}
## Credits
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well. ${answers.Credits}
## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer. ${answers.Contribute}
## Tests
Provide examples or screenshots to prove working. ${answers.Tests}
## Questions
Any questions? ${answers.Questions}

What is your GitHub username? ${answers.GitHub}

What is your email? ${answers.Email}

What is the name of your project? ${answers.Project}

What is your LinkedIn? ${answers.linkedin}
`;

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of the project:',
      },
      {
        type: 'list',
        name: 'License',
        message: 'Enter a License:',
        choices: ["MIT", "APACHE", "ISC"],       
      },
      {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub Username?',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'Project',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name: 'Title',
        message: 'Enter your Title',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required for Installation',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Enter your usage requirements',
      },
      {
        type: 'input',
        name: 'Contribute',
        message: 'Enter your contributions',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Enter your tests',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Enter any of your questions',
      },

    ])
    .then((answers) => {
        // console.log(answers);
        const Content = ReadMe(answers);
            // console.log(Content);
        fs.writeFile('README.md', Content, (err) =>
          err ? console.log(err) : console.log('Successfully created README!')
        );
      });

  };
  promptUser();

  

// fs.writeFile("index.html", )

// const user = {
//     name: "name",
// };

// const data = {
//     description: "description",
//     tableOfContents: "table of contents",
//     installation: "installation",
//     usage: "usage",
//     license: "license",
//     contributing: "contributing",
//     tests: "tests",
//     questions: "questions",
// };

// const writeFileAsync = util.promisify(fs.writeFile);