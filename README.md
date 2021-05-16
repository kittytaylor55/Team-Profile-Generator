# Team-Profile-Generator
website: https://kittytaylor55.github.io/Homework/Develop/
github link: https://kittytaylor55.github.io/Team-Profile-Generator/
display video: https://youtu.be/Cd_2SfYXSgI
app in action: https://youtu.be/SkHe25vddik 
(had to re-record the use of the app)

# User Story

AS A manager

I WANT to generate a webpage that displays my team's basic info

SO THAT I have quick access to their emails and GitHub profiles

## Installation
Video of execution of the App.

## Steps
Started with an index.html and added cards with bootstrap so that the information typed into node would have a place to go.
Added Divs so the classes I create in the future will have a place to go.

Created a library of employee, engineer, manager and intern javascript file.
Created a constructor in each JS file.
Added the properties and methods required.
Added the unique methods required for each role.

Installed node, jest, and inquirer to test in the future.

Added the card and template bottom html.

Added questions to index.js and figured out how to  append and write to the html.

Tested in the terminal, and verified that it showed correctly on the index.html.

<img src="https://kittytaylor55.github.io/Team-Profile-Generator/Assets/screenshot.png" alt="screen shot of changes listed above"/>


## Features
Using node, this app can add information to premade cards.

## Uses
Javascript
JSON
HTML 5
Node with jest and inquirer installed

## Credits
https://ucsd.bootcampcontent.com/kittytaylor/ucsd-sd-fsf-pt-03-2021-u-c


## Code Example
``````
var initialQuestion = function() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'team_manager_name',
            message: 'What is your team managers name?',
        },
        {
            type: 'input',
            name: 'team_manager_id',
            message: 'What is your team managers ID?',
        },
        {
            type: 'input',
            name: 'team_manager_email',
            message: 'What is your team managers email?',
        },
        {
            type: 'input',
            name: 'team_manager_office_id',
            message: 'What is your team managers Office ID?',
        },
    ])
    .then((data) => {
        var Manager = new manager(data.team_manager_name, data.team_manager_id, data.team_manager_email, data.team_manager_office_id);
        fs.appendFile('./dist/index.html', Manager.getCard(), function (err) {});
        memberLoopQuestion();
    });



