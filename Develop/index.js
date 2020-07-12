const inquirer = require("inquirer");
const fs = require("fs");
//const generateMarkdown = require("generateMarkdown.js");

const questions = [
    "Project title",
    "Description",
    "Table of Contents",
    "Installation",
    "Usage",
    "License",
    "Contributors",
    "Tests",
    "Questions",
    "User Github name",
    "User GitHub profile picture (url link)",
    "User GitHub email"
]

function init() {
    for (let i = 0; i < questions.length; i++) {
        inquirer.prompt ([    
            {
                type: "input",
                name: questions[i],
                message: `${questions[i]}:`
            }
        ]);
    // ]).then(function(data) {
    //     var filename = data.questions[0].toLowerCase().split(' ').join('') + ".json"; 

        // fs.writeFile(filename,JSON.stringify(data,null,'\t'),function(err) {
        //     if (err) {
        //         console.log("Error")
        //     }
        //     console.log("Success!");
        // });
    }
}

// function writeToFile(fileName, data) {
//}


//////////////////////////////////////////////////

// function writeFile(filename,data) {
//     const markdown = generateMarkdown();
//     fs.writeFile(filename,data);
// }        

//////////////////////////////////////////////////



//     }
//     if (err) {
//         console.log("Error")
//     }
//     console.log("Success!");
// });

init();

// writeFile();



//* At least one badge