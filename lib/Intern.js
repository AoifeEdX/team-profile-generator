// Import the Employee class to inherit from
const Employee = require('./employee');

// Intern class definition, extends from Employee
class Intern extends Employee {
  // Constructor to initialize Intern properties
  constructor(name, id, email, school) {
    super(name, id, email); // Call the constructor of the parent class (Employee)
    this.school = school; // School of the intern
    this.role = 'Intern'; // Role of the intern
  }

  // Method to get the role of the intern
  getRole() {
    return this.role; // Returns the role of the intern
  }

  // Method to get the school of the intern
  getSchool() {
    return this.school; // Returns the school of the intern
  }
}

// Export the Intern class to make it accessible from other modules
module.exports = Intern;
