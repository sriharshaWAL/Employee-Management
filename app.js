const express = require('express')
const mongoose = require('mongoose')
const api = require('./api')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', api)

mongoose.connect("mongodb://localhost:27017/employeeDatabase", (err) => {
    if (err) {
        console.log(error);
    }
    else
        console.log('server connected to port ' + port)
})

const port = 3100;
app.listen(port, function () {
    console.log("Running");
})
