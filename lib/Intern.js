// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class InTern extends Employee{
    constructor(id,school){
        super(id,email,name) ;
        this.school = school ;
    }
getSchool() {
    return this.school
}
getRole() {
    return "InTern";
}

}
module.exports = InTern