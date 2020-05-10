// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// If you inherit from a class, make sure you REQUIRE that class


// Basic class structure:

/*class SamplePerson extends ParentSomething {
  constructor(prop1, prop2) {
    super(prop1, prop2);
    this.prop1 = prop1;
    this.prop2 = prop2;
   }*/
class Engineer extends Employee{
  constructor(id,email,name,github){
    super(name,id,email) ;
    this.gitHub = github ;
  }


getGithub() {
  return this.github;
}
getRole(){
  return "Engineer";
}
}
  /*getProp1() {
    // return something...
  }

  setProp1() {
    // do something...
  }
    
}

module.exports = SamplePerson;*/
module.exports = Engineer;