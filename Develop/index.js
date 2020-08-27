const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
        {
            type: "input",
            name: "project",
            message: "Project title:"
        },
        {
            type: "input",
            name: "description",
            message: "Project Description:"
        },
        {
            type: "input",
            name: "installation",
            message: "Steps for Installation:"
        },
        {
            type: "input",
            name: "usage",
            message: "Steps for Usage:"
        },
        {
            type: "input",
            name: "license",
            message: "License:"
        },
        {
            type: "input",
            name: "contributors",
            message: "Number of Contributors:"
        },
        {
            type: "input",
            name: "contributornames",
            message: "Contributors' Names:"
        },
        {
            type: "input",
            name: "tests",
            message: "Tests:"
        },
        {
            type: "input",
            name: "github",
            message: "Github username:"
        },
        {
            type: "input",
            name: "email",
            message: "Email:"
        }
];

function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(),filename), data)
}

function init() {
    console.log("Welcome to the ReadMe Generator!  Fill in a few details about your project.");
    inquirer.prompt(questions).then(function(data) {   
        console.log(data);
        writeToFile("README.md",generateMarkdown(data));
        });
}

init();

//////////////////////////////////////////////////////
    // .then(function({github}) {
    //         const queryUrl = `https://api.github.com/users/${github}/repos?per_page=100`;
        
    //         axios
    //             .get(queryUrl)
    //             .then(function({reply}){
    //                 console.log({reply});
    //                 return {reply};
    //             })
    // })