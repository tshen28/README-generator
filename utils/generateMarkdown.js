// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseType = data.license[0];
  let licenseBadge = "";

  if (licenseType === "MIT License") {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU General Publice License 2.0") {
    licenseBadge = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License 2.0") {
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if (licenseType === "GNU General Public License 3.0") {
    licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  };
  return licenseBadge;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
    1. [Description](##Description) 
    2. [Installation](##Installation)
    3. [Usage](##Usage)  
    4. [Contributing](##Contributing)
    5. [Tests](##Tests)
    6. [License](##License)
    7. [GitHub](##GitHub)
    8. [Email](##Email)

  ## Description
  ${data.description} 

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data)}

  ## GitHub
  ${data.github}

  ## E-mail
  ${data.email}`;
}

module.exports = generateMarkdown;
