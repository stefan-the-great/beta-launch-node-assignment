# Employee Management System

This application is an Employment Management system developed by Stefan Fernando, and uses MongoDB for the database, Node JS for the backend API along with Express JS and React JS for the front end web application.

## Setup and Dependencies
## Backend Node API
Dependencies used for the backend;
- Express 
- Cors 
- Mongoose 
- Dotenv

The following commands must be run on a terminal window opened at the backend folder directory

To install all the dependecies use `npm install` 
After dependencies are installed, run `node server.js` 

The server will listen on port `5000` and will connect to MongoDB Atlas


## Web Application
Dependencies used for the frontend;
- react-select
- primereact

The following commands must be run on a terminal window opened at the front end folder directory

To install all the dependecies use `npm install` 
After dependencies are installed, run `npm run start` 

This will open run the frontend application, which would be open in a browser automatically 

## Usage and Endpoints
#### Web Application
The web application mirrors the FIgma design file provided, and has the following main components.

The table options section includes the **Filter dropdown** selection and the Add People button. The **Add People** button will trigger a modal containing a form which can be used to *create new employees*. 

The **Data Table** dynamically populates itself by making an API Call on mount. Each table row has partial  details of an employee, which can be *edited* or *deleted* within the table itself. All of an employee's details can be edited by clicking on the edit button in each row, which will open up a **Edit People** modal, which can be used to *edit and update* the the details of employees. The delete button will straightaway delete the specific employee.

#### Backend REST API
##### Get All Employees
`http://localhost:5000/employees/` will return all of the employees in the database

##### Get All Employees - Filtered
`http://localhost:5000/employees/?filter='Full Time'` will return the employees with the`type` 'Full Time'

`filter=` can be 	`'Full Time', 'Part Time', 'Contract Basis' or 'Other'` 

##### Get Employee by ID
`http://localhost:5000/employees/:id` this GET request will return a JSON object of all the details of an employee


##### Add New Employee 
`http://localhost:5000/employees/add` will add a new employee, given that all data fields contain valid data

##### Update Employee
`http://localhost:5000/employees/update/:id` will update the details of an employee, based on their document ID, which is connected to the Edit People modal in the web application

##### Delete Employee
  `http://localhost:5000/employees/:id` this DELETE request will delete the specific employee from the database

##### Get Current ID
`http://localhost:5000/employees/currId` will return what index a new employee should be, by checking what the empID of the last employee is and incrementing by one

---
> That is all of the functionality of this application
Enjoy!
---