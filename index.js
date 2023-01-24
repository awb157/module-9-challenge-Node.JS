
const generateMarkdown=require('./utils/generateMarkdown')
const inquirer=require('inquirer')
const fs=require('fs')


const questions = [];


function writeToFile(fileName, data) {}


function init() {
inquirer.prompt([
    {
type: "input",
message: "what is the title",
name: "title"
},

   {
type: "input",
message: "please discribe your project",
name: "discription",
}, 

   {
    type: "input",
    message: "please include any installation instruction's",
    name: "installation",
    },

    {
        type: "input",
        message: "please include any Usage instruction's",
        name: "usage",
        },

        {
            type: "list",
            message: "please include any License",
            choices: ['MIT','Mozilla','none'],
            name: "license",
            },

            {
                type: "input",
                message: "please include any Contributing parties",
                name: "contributing",
                },

                {
                    type: "input",
                    message: "please include any testing information",
                    name: "test",
                    },

                    {
                        type: "input",
                        message: "please include any questions",
                        name: "questions",
                        },

]).then(data=>{
    console.log(data)
    fs.writeFileSync("test readme.md",generateMarkdown(data))
})

}


init();
