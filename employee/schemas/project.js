const mongoose = require('mongoose')
const projectDetails = mongoose.Schema({
    empId: { type: mongoose.Schema.Types.ObjectId, ref: 'employee' },
    projectName: { type: String },
    projectDuration: { type: String },
    clientName: { type: String },
    fromDate: { type: Date },
    toDate: { type: Date }
})
module.exports = mongoose.model('project', projectDetails)