# EmployeeManagementSystem1.2

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
## Database Structure 
The schema contains the following three tables:

* `department`

    * `id`: `INT PRIMARY KEY`

    * `name`: `VARCHAR(30)` to hold department name

* `role`

    * `id`: `INT PRIMARY KEY`

    * `title`: `VARCHAR(30)` to hold role title

    * `salary`: `DECIMAL` to hold role salary

    * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

    * `id`: `INT PRIMARY KEY`

    * `first_name`: `VARCHAR(30)` to hold employee first name

    * `last_name`: `VARCHAR(30)` to hold employee last name

    * `role_id`: `INT` to hold reference to employee role

    * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

* constructor for organization
* `seeds.sql` file to pre-populate your database

## Installations
- `npm install`
* Inquirer 
- `npm install inquirer`[Inquirer package](https://www.npmjs.com/package/inquirer).
* MySQL2 
- `npm install --save mysql2`[MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.
* console.table package
- `npm install console.table --save`
- `bower install console.table --save` [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

## Commands to Start SQL
- `mysql -u root -p`: to start the SQL server
- `source db/schema.sql`: to source schema
- `source db/seeds.sql`: to source seeds
- `exit`: to exit SQL

## Commands to Start SQL
- `npm i`: to install dependencies
- `npm run`: to run server.js (app)

### Screenshots
<br>
<img width="404" alt="Screen Shot 2022-01-29 at 12 26 19 PM" src="https://user-images.githubusercontent.com/63617482/151677014-42ebabab-8dc8-4d10-8091-08f31f53021f.png">
<br>
<img width="420" alt="Screen Shot 2022-01-29 at 12 38 34 PM" src="https://user-images.githubusercontent.com/63617482/151677010-d583d6f7-90a3-4bda-ad7d-699e80ba2598.png">
<br>
<img width="522" alt="Screen Shot 2022-01-29 at 12 39 17 PM" src="https://user-images.githubusercontent.com/63617482/151676957-c9f8985c-4deb-4ab2-bfbf-8bd2ee5400c7.png">
<br>
<img width="383" alt="Screen Shot 2022-01-29 at 12 39 41 PM" src="https://user-images.githubusercontent.com/63617482/151677019-38ad8f82-1158-44bf-ad40-72629bb68c2f.png">
<br>






## Link to Github Repository
- https://github.com/carvasquez206/A12-EmployeeManagementSystem

