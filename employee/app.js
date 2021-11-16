const express = require('express')
const mongoose = require('mongoose')
const api = require('./api')
const app = express()
const logger=require('./api/routes/logger')
const winston=require('winston')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', api)
app.use(function(req,res){
    const err=new Error('Not found')
    err.status=404
    logger.error(err)
    res.json(err)
})

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
    logger.info('Api server listening on port');
})
