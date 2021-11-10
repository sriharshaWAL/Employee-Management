const mongoose = require('mongoose')
const salaryDetails = mongoose.Schema({
    empId: { type: mongoose.Schema.Types.ObjectId, ref: 'employee' },
    totalWorkingdays: { type: Number },
    leavesTaken: { type: Number },
    totalEarnings: { type: String },
    totalContributions: { type: String },
    totalDeductions: { type: String },
    netSalary: { type: String }

})
module.exports = mongoose.model('salary', salaryDetails)

