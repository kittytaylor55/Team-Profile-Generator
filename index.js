 const inquirer = require('inquirer');
 const jest = require('jest');
 const fs = require('fs');
 const engineer = require('./lib/engineer');
 const intern = require('./lib/intern');
 const manager = require('./lib/manager');
 
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
        memberLoopQuestion();
    });
    
}

function memberLoopQuestion() {
    return inquirer
    .prompt(
        {
            type: 'list',
            name: 'team_member_type',
            message: 'Which type of team member would you like to add?',
            choices: ['engineer', 'intern'],
        },
        )
        .then((data) => {
            
            if (data.team_member_type === 'engineer') {
                
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'engineer_name',
                        message: 'What is your engineers name?',
                    },
                    {
                        type: 'input',
                        name: 'engineer_id',
                        message: 'What is your engineers ID?',
                    },
                    {
                        type: 'input',
                        name: 'engineer_email',
                        message: 'What is your engineers email?',
                    },
                    {
                        type: 'input',
                        name: 'engineer_github',
                        message: 'What is your engineers github URL?',
                    },
                    {
                        type: 'confirm',
                        name: 'add_another_member',
                        message: 'Would you like to add another member?',
                    },
                ])
                .then((data) => {
                    
                    var Engineer = new engineer(data.engineer_name, data.engineer_id, data.engineer_email, data.engineer_github);
                    
                    if (data.add_another_member === true) {
                        memberLoopQuestion();
                    }
                    
                });
                
            }
            
            if (data.team_member_type === 'intern') {
                
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'intern_name',
                        message: 'What is your interns name?',
                    },
                    {
                        type: 'input',
                        name: 'intern_id',
                        message: 'What is your interns ID?',
                    },
                    {
                        type: 'input',
                        name: 'intern_email',
                        message: 'What is your interns email?',
                    },
                    {
                        type: 'input',
                        name: 'intern_school',
                        message: 'What is your interns School?',
                    },
                    {
                        type: 'confirm',
                        name: 'add_another_member',
                        message: 'Would you like to add another member?',
                    },
                ])
                .then((data) => {
                    
                    var Intern = new intern(data.intern_name, data.intern_id, data.intern_email, data.intern_school);
                    
                    if (data.add_another_member === true) {
                        memberLoopQuestion();
                    }
                    
                });
                
            }
        });
        
    }
    
    initialQuestion();