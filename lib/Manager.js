// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(id,officeNumber){
        super(id,email,name);
        this.officeNumber = officeNumber;

    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }

}




module.exports = Manager