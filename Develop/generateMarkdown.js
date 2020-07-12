function generateMarkdown(data) {
    return `
    # ${data.title}
    ${data.license}
    
    ## Description
    ${data.description}
    
    ## Table of Contents
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}

    ## Tests
    `
}

module.exports();