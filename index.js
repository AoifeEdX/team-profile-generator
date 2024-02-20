// Importing required modules and classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// Setting up output directory and file path
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team-profile.html');

// Importing HTML rendering function
const render = require('./src/page-template.js');

// Utility functions for input validation
const validateEmail = (email) => {
	const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	return emailRegex.test(email) || 'Please enter a valid email address';
};

const validateNumber = (number) => {
	return Number.isInteger(Number(number)) || 'Please enter a valid number';
};

// Object to store team information
const team = {
	teamName: '',
	teamMembers: [],
};

// Function to prompt for team name
const teamName = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'teamName',
				message: `What's the name of the team?`,
				validate: (input) => {
					return input.trim() !== '' ? true : 'Please enter the team name.';
				},
			},
		])
		.then((resp) => {
			team.teamName = resp.teamName;
			createManager();
		});
};

// Function to create manager
const createManager = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: `Manager's name:`,
			},
			{
				type: 'input',
				name: 'id',
				message: `Manager's ID number:`,
				validate: validateNumber,
			},
			{
				type: 'input',
				name: 'email',
				message: `Manager's email:`,
				validate: validateEmail,
			},
			{
				type: 'input',
				name: 'number',
				message: `Manager's phone number:`,
			},
		])
		.then((resp) => {
			const manager = new Manager(resp.name, resp.id, resp.email, resp.number);
			team.teamMembers.push(manager);
			addEmployee();
		});
};

// Function to prompt for adding more employees
const addEmployee = () => {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'role',
				message: 'Add an employee to the team:',
				choices: ['Engineer', 'Intern', 'No more team members'],
			},
		])
		.then((resp) => {
			switch (resp.role) {
				case 'Engineer':
					createEmployee('Engineer', Engineer);
					break;
				case 'Intern':
					createEmployee('Intern', Intern);
					break;
				default:
					generateFile();
					break;
			}
		});
};

// Function to create employee based on role
const createEmployee = (role, EmployeeType) => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: `${role}'s name:`,
			},
			{
				type: 'input',
				name: 'id',
				message: `${role}'s ID number:`,
				validate: validateNumber,
			},
			{
				type: 'input',
				name: 'email',
				message: `${role}'s email:`,
				validate: validateEmail,
			},
			...(role === 'Engineer'
				? [
					{
						type: 'input',
						name: 'github',
						message: `Engineer's GitHub username:`,
					},
				]
				: []),
			...(role === 'Intern'
				? [
					{
						type: 'input',
						name: 'school',
						message: `Intern's school:`,
					},
				]
				: []),
		])
		.then((resp) => {
			const employee = new EmployeeType(
				resp.name,
				resp.id,
				resp.email,
				resp[role.toLowerCase() === 'engineer' ? 'github' : 'school']
			);
			team.teamMembers.push(employee);
			addEmployee();
		});
};

// Function to generate HTML file with team profile
const generateFile = () => {
	const html = render(team);
	fs.writeFile(outputPath, html, (err) => {
			if (err) throw err;
			console.log(`Team profile successfully generated at ${outputPath}`);
	});
};

// Function to initialize the application
const init = () => {
	inquirer
		.prompt([
			{
				type: 'confirm',
				name: 'createTeam',
				message: 'Would you like to create a team?',
			},
		])
		.then((resp) => {
			if (resp.createTeam) {
				teamName();
			}
		});
};

// Initializing the application
init();
