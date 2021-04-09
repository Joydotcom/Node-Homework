// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  ${data.license}
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
