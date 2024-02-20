// Import the necessary file system module
const fs = require('fs');

// Function to generate HTML content for each team member
const generateTeam = (team) => {
  // Function to generate HTML for a manager
  const generateManager = (manager) => {
    // HTML markup for the manager card
    return `
    <div class="card employee-card col-md-8 m-2">
        <!-- Manager Card Example -->
        <div class="card-body">
            <div class="bg-light bg-gradient rounded p-3 mb-2">
                <div class="mx-auto d-flex justify-content-center align-items-center p-4">
                    <i class="fas fa-user-tie fa-3x"></i>
                </div>
                <h3 class="card-title text-center mt-3">${manager.getName()}</h3>
                <h5 class="card-subtitle mb-2 text-muted text-center">${manager.getRole()}</h5>
            </div>
            <ul class="list-unstyled text-center">
                <li class="py-1"><i class="fas fa-id-card"></i> ${manager.getId()}</li>
                <li class="py-1"><i class="fas fa-at"></i> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="py-1"><i class="fas fa-phone"></i> ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`;
  };

  // Function to generate HTML for an engineer
  const generateEngineer = (engineer) => {
    // HTML markup for the engineer card
    return `
    <div class="card employee-card col-md-4 m-2">
        <!-- Engineer Card Example -->
        <div class="card-body">
            <div class="bg-light bg-gradient rounded p-3 mb-2">
                <div class="mx-auto d-flex justify-content-center align-items-center p-4">
                    <i class="fas fa-user fa-3x"></i>
                </div>
                <h3 class="card-title text-center mt-3">${engineer.getName()}</h3>
                <h5 class="card-subtitle mb-2 text-muted text-center">${engineer.getRole()}</h5>
            </div>
            <ul class="list-unstyled text-center">
                <li class="py-1"><i class="fas fa-id-card"></i> ${engineer.getId()}</li>
                <li class="py-1"><i class="fas fa-at"></i> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="py-1"><i class="fab fa-github"></i> <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>`;
  };

  // Function to generate HTML for an intern
  const generateIntern = (intern) => {
    // HTML markup for the intern card
    return `
    <div class="card employee-card col-md-4 m-2">
        <!-- Intern Card Example -->
        <div class="card-body">
            <div class="bg-light bg-gradient rounded p-3 mb-2">
                <div class="mx-auto d-flex justify-content-center align-items-center p-4">
                    <i class="fas fa-user fa-3x"></i>
                </div>
                <h3 class="card-title text-center mt-3">${intern.getName()}</h3>
                <h5 class="card-subtitle mb-2 text-muted text-center">${intern.getRole()}</h5>
            </div>
            <ul class="list-unstyled text-center">
                <li class="py-1"><i class="fas fa-id-card"></i> ${intern.getId()}</li>
                <li class="py-1"><i class="fas fa-at"></i> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="py-1"><i class="fas fa-graduation-cap"></i> ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`;
  };

  // Array to store HTML fragments for each team member
  const html = [];

  // Push HTML for managers to the array
  html.push(
    team.teamMembers
      .filter((employee) => employee.getRole() === 'Manager')
      .map((manager) => generateManager(manager))
  );

  // Push HTML for engineers to the array
  html.push(
    team.teamMembers
      .filter((employee) => employee.getRole() === 'Engineer')
      .map((engineer) => generateEngineer(engineer))
      .join('')
  );

  // Push HTML for interns to the array
  html.push(
    team.teamMembers
      .filter((employee) => employee.getRole() === 'Intern')
      .map((intern) => generateIntern(intern))
      .join('')
  );

  // Return joined HTML fragments for all team members
  return html.join('');
};

// Export function to generate the entire HTML page
module.exports = (team) => {
  // HTML markup for the entire page
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient py-5">
        <div class="container">
						<h1 class="navbar-brand fs-1">${team.teamName}</h1>
        </div>
    </nav>

    <main class="py-5 bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <!-- Employee Cards -->
                ${generateTeam(team)}
            </div>
        </div>
    </main>

    <footer class="p-5 bg-white bg-gradient mt-5">
        <div class="container text-center">
            <p>&copy; 2024 <a class="link-dark link-offset-2" href="https://github.com/AoifeEdX/team-profile-generator">AoifeEdX</a></p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>`;
};
