// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }
  else if (license === "Apache 2.0") {
return license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"


  } else return ""
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return license = "(https://opensource.org/licenses/MIT)"
  } else if (license === "Apache 2.0") {
return license = "(https://opensource.org/licenses/Apache-2.0)"


  } else return ""
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

  ## DESCRIPTION 
  This project is licensed under: ${data.description}
  ## TABLE OF CONTENTS
  ${data.title}
  * [INSTALLATION] (#installation)
  ${data.installation}
  * [USAGE] (#usage)
  ${data.title}
  * [LICENSE] (#license)
  THis project is licensed with ${data.license}
  * [CONTRIBUTING] (#contributing)
  ${data.contributing}
  * [TESTS] (#test)
  To run tests run the following command : ${data.tests}
  * [QUESTIONS] (#questions)
  
  
  ## INSTALLATION
  
  ## USAGE
  
  ## LICENSE
  
  ## CONTRIBUTING
  
  ## TESTS
  ## QUESTIONS If you have any questions about the repo, open and issue or contact 
  me directly at ${data.email}. You can find more of my work 
  at [${data.username}] (https://github.com/${data.username}/)
  `
}

module.exports = generateMarkdown;
