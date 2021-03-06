const  Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// This file will generate the final HTML. You don't need to touch this at all!
const render = require("./lib/htmlRenderer");

// This will be an array of all team member objects created
const teamMembers = [];

// This will be an array of the id values created for each object so there are no duplicates
const idArray = [];


// STUDENT: This function generates all the questions for creating the manager. You need to add more to this.
function createManager(){
  console.log("Please build your team");
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your manager's name?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    // STUDENT: Add other questions here!
    
    {
      type: "input",
      name: "emailManager",
      message: "What is your email address?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office number?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one number.";
      }
    },
    {
      type: "input",
      name: "idManager",
      message: "What is your ID number?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one number.";
      }
    },
    ]).then(res => {
      // STUDENT: Process the response by instatiating a new object in the Manager class
     const managerObj = new Manager(res.managerName,res.idManager,res.emailManager,res.officeNumber)
     
    
      teamMembers.push(managerObj)
      idArray.push(managerObj.id)

console.log (managerObj);
createTeam();
    });
  }  
// This function starts team creation.
function createTeam() {
  inquirer.prompt([
    // STUDENT: Ask which type of team member should be created with a list of choices
    {
      type: "list", 
      message: "Which type of team member?",
      name: "teamType",
      choices: [
        "Engineer",
        "Intern",
        "I do not want to add anymore team member"
        ]
    },
  ]).then(res => {
    // STUDENT: Based on which choice they make, call the correct function to ask more questions.
    if (res.teamType === "Engineer") { createEngineer() }
    else if (res.teamType === "Intern") { createIntern() }
    else { renderHtmlPage() }
  
    // If no choice is made, then go to the rendering function.


  });
}
    
// This function starts team creation.
function createEngineer() {
  inquirer.prompt([
    // STUDENT:  Engineer questions
    {
      type: "input",
      name: "engineerName",
      message: "What is your engineer's name?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    // STUDENT: Add other questions here!
    {
      type: "input",
      name: "idEngineer",
      message: "What is your ID number?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one number.";
      }
    },
    {
      type: "input",
      name: "emailEngineer",
      message: "What is your email address?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "gitHubEngineer",
      message: "What is your GitHub?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    
  ]).then(res => {
    const engineerObj = new Engineer(res.engineerName,res.gitHubEngineer,res.emailEngineer,res.idEngineer)
    
    // STUDENT: Make sure the id supplied is unique, then take the data supplied and 
        teamMembers.push(engineerObj)
    // instantiate the Engineer constructor.
        idArray.push(engineerObj.id)
    // STUDENT: When finished:
       // Add the new object to the team member array
       // Pass control back to the createTeam() function
       console.log(engineerObj);
createTeam();
  });
}
function createIntern() {
  inquirer.prompt([
    // STUDENT:  inTern questions
    {
      type: "input",
      name: "internName",
      message: "What is your inTern's name?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    // STUDENT: Add other questions here!
    {
      type: "input",
      name: "idIntern",
      message: "What is your ID number?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one number.";
      }
    },
    {
      type: "input",
      name: "emailIntern",
      message: "What is your email address?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is your school's name?",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
  ]).then(res => {
    const internObj = new Intern(res.internSchool,res.emailIntern,res.idIntern)
    console.log(internObj);
    // STUDENT: Make sure the id supplied is unique, then take the data supplied and 
    teamMembers.push(internObj)
    // instantiate the inTern constructor.
    idArray.push(internObj.id)
    
    // STUDENT: When finished:
       // Add the new object to the team member array
       // Pass control back to the createTeam() function
       createTeam();
  });
}


// STUDENT: This function will call the render function required near the top (line 12), 
// and pass INTO it the teamMembers area; from there, write the HTML returned back to a file 
// in a directory called output.
function renderHtmlPage(){
const html = render(teamMembers);
fs.writeFile("output.html",html,err =>{

})
}

// This is our starter function.
// Note that we use separate functions for different questions in inquirer to 
// help keep code organized.
function startMenu() {
  
  // Here we start things off by calling the createManager function
  createManager()

}

    
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

    
startMenu();
   