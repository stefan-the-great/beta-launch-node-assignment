const router = require("express").Router();
let Employee = require('../models/employee.model'); //Imports the mongoose model for a Employee

// The first Route/End-point
router.route('/').get((req, res) => {
    // Accessing the filter parameter
    let filter = req.query.filter;

    // .find() is a mongoose method => Get a list of all the employees in the Atlas Database
    Employee.find()
        .then(employees => {
            if (filter) {
                filter = filter.split("'").join(""); // To remove double quotes from req

                if (filter == "All") {
                    res.json(employees); // Send all employee data

                } else {
                    let filteredEmployees = [];

                    employees.forEach(emp => {
                        // Filter out the data based on filter parameter
                        if (emp["type"] == filter) {
                            filteredEmployees.push(emp);
                        }
                    });
                    res.json(filteredEmployees);
                }
            } else {
                // If no filtering is needed: return all employees
                res.json(employees);
            }

        }) // .find() returns a promise => results are returned in a json format
        .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint to get curr index for new employees
router.route('/currId').get((req, res) => {
    Employee.find()
        .then(employees => {
            if (employees.length >= 1) {
                let currIndex = employees[employees.length - 1]["empID"];
                res.json({ "currIndex": (currIndex + 1) });
            } else {
                res.json({ "currIndex": 1 });
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add New Employee
router.route('/add').post((req, res) => { // <baseurl>/employees/add
    const empID = req.body.currIndex;
    const fullName = req.body.fullName;
    const nameInitials = req.body.nameInitials;
    const displayName = req.body.displayName;
    const gender = req.body.gender;
    const birthday = Date.parse(req.body.birthday);
    const email = req.body.email;
    const phone = req.body.phone;
    const designation = req.body.designation;
    const type = req.body.type;
    const joinedDate = Date.parse(req.body.joinedDate);
    const experience = Number(req.body.experience);
    const salary = Number(req.body.salary);
    const notes = req.body.notes;


    // Create a new employee object
    const newEmployee = new Employee({
        empID,
        fullName,
        nameInitials,
        displayName,
        gender,
        birthday,
        email,
        phone,
        designation,
        type,
        joinedDate,
        experience,
        salary,
        notes
    });

    // Add a new Employee to the database
    newEmployee.save()
        .then(() => res.json('Employee Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Employee by ID
router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Employee by ID
router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json("Employee deleted!"))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update Employee by ID
router.route('/update/:id').post((req, res) => {
    console.log("ID: ", req.params.id);
    console.log("Body: ", req.body);
    Employee.findById(req.params.id)
        .then(employee => {
            employee.empID = req.body.currIndex;
            employee.fullName = req.body.fullName;
            employee.nameInitials = req.body.nameInitials;
            employee.displayName = req.body.displayName;
            employee.gender = req.body.gender;
            employee.birthday = Date.parse(req.body.birthday);
            employee.email = req.body.email;
            employee.phone = req.body.phone;
            employee.designation = req.body.designation;
            employee.type = req.body.type;
            employee.joinedDate = Date.parse(req.body.joinedDate);
            employee.experience = Number(req.body.experience);
            employee.salary = Number(req.body.salary);
            employee.notes = req.body.notes;

            employee.save()
                .then(() => res.json("Employee Updated!"))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;