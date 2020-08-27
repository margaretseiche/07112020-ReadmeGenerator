# 07112020-ReadmeGenerator
This assignment creates a Command Line Interface for developers to generate a formatted ReadMe file after answering a few questions in Inquirer.  

This will allow developers to include relevant project information in each of their projects, rather than remembering to include the key components or knowing how to format the file themselves.  The generated ReadMe file will then have the details that a user accessing the developer's repository would need to utilize the project, including how to install it and how to run it.

After gathering the developer's information in Inquirer, a Javascript file called 'generateMarkdown.js' applies the data and formats it in Markdown language.  This module is exported and called by the file system to 'writeToFile', which saves the ReadMe file.

You can see a generated ReadMe file; the demo is uploaded to Youtube at https://youtu.be/C4KLrUpt-M8.
