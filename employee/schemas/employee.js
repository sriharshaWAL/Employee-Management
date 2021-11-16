const mongoose = require('mongoose')
const employeeSchema = mongoose.Schema({
    employeeNO: { type: Number },
    firstName: { type: String },
    lastName: { type: String },
    gender: { type: String },
    dateOfBirth: { type: Date },
    dateOfJoining:{type:Date},
    jobTitle: { type: String },
    emailId: { type: String },
    phnNo: { type: String }
})
module.exports = mongoose.model('employee', employeeSchema)

