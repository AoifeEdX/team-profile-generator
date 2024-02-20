// Employee class definition
class Employee {
  // Constructor to initialize Employee properties
  constructor(name, id, email) {
    this.role = 'Employee'; // Default role for all employees
    this.name = name; // Name of the employee
    this.id = id; // ID of the employee
    this.email = email; // Email of the employee
  }

  // Method to get the role of the employee
  getRole() {
    return this.role; // Returns the role of the employee
  }

  // Method to get the name of the employee
  getName() {
    return this.name; // Returns the name of the employee
  }

  // Method to get the ID of the employee
  getId() {
    return this.id; // Returns the ID of the employee
  }

  // Method to get the email of the employee
  getEmail() {
    return this.email; // Returns the email of the employee
  }
}

// Export the Employee class to make it accessible from other modules
module.exports = Employee;
