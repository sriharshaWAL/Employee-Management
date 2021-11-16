const mongoose = require('mongoose')
const workingHours = mongoose.Schema({
    empId: { type: mongoose.Schema.Types.ObjectId, ref: 'employee' },
    date: { type: Date },
    clockIn_time: { type: String },
    clockOut_time: { type: String }
})
module.exports = mongoose.model('working Hours', workingHours)

