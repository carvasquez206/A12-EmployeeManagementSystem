USE employee_db;

INSERT INTO department (name)
VALUES ("Youtuber"),
       ("Gamestop Clerk"),
       ("Singer"),
       ("Game Design"),
       ("Rapper");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 200000.00, 1),
       ("Engineer", 125000.00, 2),
       ("Intern", 45000.00, 3);
       


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null),
       ("Pam", "Beasly", 2, 1),
       ("Will", "Smith", 3, 1),
       ("2pac", "Shakur", 3, null),
       ("Jennifer", "Lopez", 1, null),
       ("Ron", "Swanson", 2, null),
       ("Dwight", "Schrute", 2, 5),
       ("Rick", "James", 3, 5),
       ("Russel", "Wilson", 3, 5);
       

       

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;


/* `department`

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
