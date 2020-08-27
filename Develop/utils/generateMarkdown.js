function generateMarkdown(data) {
  return `
<!--THIS TEXT WILL NOT APPEAR IN BROWSER WHEN README IS DISPLAYED.  
This file was generated when the user answered questions in the CLI (Command Line Interface).-->
                                   
<h1 align="center">${data.project}</h1>

<!-- PROJECT BADGES -->
![](https://img.shields.io/badge/Number%20of%20Contributors-${data.contributors}-blue)
![](https://img.shields.io/badge/License-${data.license}-red)

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Github](#Github)
* [Email](#Email)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributornames}

## Tests
${data.tests}

## Github Profile
${data.github}

## Questions? Email to     
${data.email}
            `
}

module.exports = generateMarkdown;
