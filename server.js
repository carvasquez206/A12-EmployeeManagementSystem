const inquirer = require('inquirer')
// Import and require mysql2
const mysql = require('mysql2');
require('dotenv').config();
const consoleTable = require('console.table')


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: process.env.DB_USERNAME,
    // MySQL password
    password: process.env.DB_PASSWORD,
    database: 'employeelist_db'
  },
  console.log(`Connected to the employeelist_db database.`)
);

function viewAllDepartments() {
  //run a data base query to get all departments
  //display results from the db query
  //return to main menu after the results are displayed
  db.query('SELECT * FROM department', function (err, results) {
    if (err) {
      throw err;
    }
    console.table(results);
    mainMenu();
  });
}
function viewAllRoles() {
  db.query('SELECT * FROM role', function (err, results) {
    if (err) {
      throw err;
    }
    console.table(results);
    mainMenu();
  });
}

function viewAllEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {
    if (err) {
      throw err;
    }
    console.table(results);
    mainMenu();
  });
}
function addDepartment() {
  // prompt user for dept name

  inquirer.prompt([
    {
      type: "input",
      message: "What is your department's name?",
      name: 'departmentName'
    }
  ])
    .then((answer) => {

      const sql = `INSERT INTO department (name) VALUES (?)`;

      db.query(sql, answer.departmentName, (err, result) => {
        if (err) {
          console.error(err)
          console.log(`\n ${answer.departmentName} successfully added to database! \n`);
          return;
        }
        mainMenu();
      })

    })
}

// role takes in name, salary and department_id
function addRole() {
  db.query(`SELECT * FROM department;`, (err, res) => {

    let existingDepartments = res.map(department => ({ name: department.name, value: department.id }));

    inquirer.prompt([
      {
        type: "input",
        message: "What role would you like to add?",
        name: 'roleName'
      },
      {
        type: "input",
        message: "What is the salary for this position?",
        name: "roleSalary"
      },
      {
        type: "rawlist",
        message: "What department does this role belong to?",
        name: "roleDelegation",
        choices: existingDepartments
      }
    ])
      .then((answer) => {
        db.query(`INSERT INTO role SET ?`,
          {
            title: answer.roleName,
            salary: answer.roleSalary,
            department_id: answer.roleDelegation,
          },
          (err, res) => {
            if (err) throw err;
            console.log(`\n ${answer.roleName} successfully added to database! \n`);
            mainMenu();
          })
      })
  })
}

// employee takes in first name, last name, role, and manager
function addEmployee() {
  db.query(`SELECT * FROM role;`, (err, res) => {
    let roles = res.map(role => ({name: role.title, value: role.id }));
    db.query(`SELECT * FROM employee WHERE role_id=1;`, (err, res) => {
        let managers = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.role_id}));
        inquirer.prompt([
          {
              name: 'firstName',
              type: 'input',
              message: 'What\'s this employee\'s first name?'
          },
          {
              name: 'lastName',
              type: 'input',
              message: 'What\'s this employee\'s last name?'
          },
          {
              name: 'role',
              type: 'rawlist',
              message: 'What\'s this employee\'s job title?',
              choices: roles
          },
          {
              name: 'manager',
              type: 'rawlist',
              message: 'Who is this employee\'s manager?',
              choices: managers
          }
      ]).then((answer) => {

          db.query(`INSERT INTO employee SET ?`, 
          {
              first_name: answer.firstName,
              last_name: answer.lastName,
              role_id: answer.role,
              manager_id: answer.manager,
          }, 
          (err, res) => {
              if (err) throw err;
              console.log(`\n ${answer.firstName} ${answer.lastName} successfully added to database! \n`);
              mainMenu();
          })
      })
  })
})
};

function updateEmployee() {
  db.query(`SELECT * FROM role;`, (err, res) => {
    if (err) throw err;
    let roles = res.map(role => ({name: role.title, value: role.id }));
    db.query(`SELECT * FROM employee;`, (err, res) => {
        if (err) throw err;
        let employees = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.role_id }));
        inquirer.prompt([
            {
                name: 'chosenOne',
                type: 'rawlist',
                message: 'Which employee would you like to update?',
                choices: employees
            },
            {
                name: 'updateRole',
                type: 'rawlist',
                message: 'Which role would you like to give this employee?',
                choices: roles
            },
        ]).then((answer) => {
            db.query(`UPDATE employee SET ? WHERE ?`, 
            [
                {
                    role_id: answer.updateRole,
                },
                {
                    id: answer.chosenOne,
                },
            ], 
            (err, res) => {
                if (err) throw err;
                console.log(`\n This employee's role has been updated to the database!! \n`);
                mainMenu();
            })
        })
    })
})

};

function mainMenu() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ['View Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee', 'Finished'],
      name: 'mainMenu'
    }
  ])
    .then((answer) => {
      if (answer.mainMenu === 'View Departments') {
        // call function to view all departments
        viewAllDepartments();
        return
      }
      if (answer.mainMenu === 'View All Roles') {
        // call function to view all roles
        viewAllRoles();
        return
      }
      if (answer.mainMenu === 'View All Employees') {
        // call function to view all employees
        viewAllEmployees();
        return
      }
      if (answer.mainMenu === 'Add a Department') {
        // call function to add a departments
        addDepartment();
        return
      }
      if (answer.mainMenu === 'Add a Role') {
        // call function to add a departments
        addRole();
        return
      }
      if (answer.mainMenu === 'Add an Employee') {
        // call function to add a departments
        addEmployee();
        return
      }
      if (answer.mainMenu === 'Update an Employee') {
        // call function to add a departments
        updateEmployee();
        return
      }
      if(answer.mainMenu === 'Finished') {
        db.end();
        console.log('\n Until next time you rascal! \n');
        return;
      }
    }).catch((err) => {
      console.log(err);
    })
}

mainMenu();