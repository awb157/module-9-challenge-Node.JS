
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "Mozila") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else { return `` }

}


function renderLicenseLink(license) { }


function renderLicenseSection(license) { }


function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

  # Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Test](#test)
  7. [Questions](#questions)
  

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Test
${data.test}

## Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
