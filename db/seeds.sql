INSERT INTO department (name)
VALUES ("IT"),
       ("Entertainment"),
       ("Singer"),
       ("Software Developer");

INSERT INTO role (title, salary, department_id)
VALUES ("IT", 78000, 1),
       ("Rapper", 25000000, 2 ),
       ("Singer", 55000000, 2),
       ("Software Developer", 125000, 1),

INSERT INTO employee (first_name,last_name, role_id, manager_id)
VALUES ("2pac", "Shakur", 2, 2),
       ("Jim", "Carey", 2, null),
       ("Michael","Scott" , 1, 1),
       ("Abel", "Tesfaye", 1, 2),
       ("Dwight","Schrute", 1, null),
       ("Prison","Mike", 1, 1),
       ("Stanley","Yelnats", 1, null),




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
