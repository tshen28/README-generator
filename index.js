const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');

inquirer
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name:'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name:'installation',
        message: 'What are the steps required to install your application?',
    },
    {
        type: 'input',
        name:'usage',
        message: 'Provide instructions and examples for usage.',
    },
    {
        type: 'input',
        name:'contributing',
        message: 'How can people contribute to your project?',
    },
    {
        type: 'input',
        name:'tests',
        message: 'What tests can you run for your project?',
    },
    {
        type: 'checkbox',
        name:'license',
        message: 'What license did you use?',
        choices: ["MIT License", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"]
    },
    {
        type: 'input',
        name:'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name:'email',
        message: 'What is your email address?',
    },
    
])
.then((data) => {
    fs.writeFile('README.md', generate(data), (err) => 
    err ? console.log(err) : console.log("Success!")
    );
})