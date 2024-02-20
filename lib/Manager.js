// Import the Employee class to inherit from
const Employee = require('./employee');

// Manager class definition, extends from Employee
class Manager extends Employee {
  // Constructor to initialize Manager properties
  constructor(name, id, email, officeNumber) {
    super(name, id, email); // Call the constructor of the parent class (Employee)
    this.officeNumber = officeNumber; // Office number of the manager
    this.role = 'Manager'; // Role of the manager
  }

  // Method to get the role of the manager
  getRole() {
    return this.role; // Returns the role of the manager
  }

  // Method to get the office number of the manager
  getOfficeNumber() {
    return this.officeNumber; // Returns the office number of the manager
  }
}

// Export the Manager class to make it accessible from other modules
module.exports = Manager;
