// Importing the dependencies (Express and CORS)
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Configurations to have our env variables as a .env file
require('dotenv').config();

// Creates the Express server
const app = express();
const port = process.env.port || 5000; // Sets the port

// Uses cors middleware
app.use(cors());
app.use(express.json()); // Allows to recieve and send JSON

// DATABASE CONNECTION CODE
const uri = process.env.ATLAS_URI; // The database URI (Provided by MongoDB)
mongoose.connect(uri); // Starts the connection

// Confirms the DB connection
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const employeesRouter = require("./routes/employees");

app.use('/employees', employeesRouter);

// Starts and serves the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});