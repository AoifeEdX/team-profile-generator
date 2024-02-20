// Import the Employee class to inherit from
const Employee = require('./employee');

// Engineer class definition, extends from Employee
class Engineer extends Employee {
  // Constructor to initialize Engineer properties
  constructor(name, id, email, github) {
    super(name, id, email); // Call the constructor of the parent class (Employee)
    this.github = github; // GitHub username of the engineer
    this.role = 'Engineer'; // Role of the engineer
  }

  // Method to get the role of the engineer
  getRole() {
    return this.role; // Returns the role of the engineer
  }

  // Method to get the GitHub username of the engineer
  getGithub() {
    return this.github; // Returns the GitHub username of the engineer
  }
}

// Export the Engineer class to make it accessible from other modules
module.exports = Engineer;
