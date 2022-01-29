// Import and require inquirer
const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
require('dotenv').config();
// Import console.table
const consoleTable = require('console.table')


// connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'employee_db'
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
  });
  
  // welcome image
  afterConnection = () => {
    console.log("***********************************")
    console.log("*                                 *")
    console.log("*           Moshi! Moshi!         *")
    console.log("*                                 *")
    console.log("***********************************")
    promptUser();
  };
  