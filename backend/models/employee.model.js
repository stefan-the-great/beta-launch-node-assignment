// Import mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    // Declear employeeSchema
    empID: { type: Number, required: true, unique: true, trim: true },
    fullName: { type: String, required: true, trim: true },
    nameInitials: { type: String, required: true, trim: true },
    displayName: { type: String, required: false, trim: true },
    gender: { type: String, required: false, trim: true },
    birthday: { type: Date, required: false, trim: true },
    email: { type: String, required: false, trim: true },
    phone: { type: String, required: false, trim: true },
    designation: { type: String, required: false, trim: true },
    type: { type: String, required: false, trim: true },
    joinedDate: { type: Date, required: false, trim: true },
    experience: { type: Number, required: false, trim: true },
    salary: { type: Number, required: false, trim: true },
    notes: { type: String, required: false, trim: true }
}, {
    timestamps: false
});

const Employee = mongoose.model('Employee', employeeSchema);

// Export Schema
module.exports = Employee;