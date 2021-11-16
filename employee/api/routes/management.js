const employees = require('../../schemas/employee')
const projects = require('../../schemas/project')
const workhrs = require('../../schemas/workingHrs')
const salary = require('../../schemas/salary')

module.exports = function (router) {
    router.use(function(req,res,next){
        res.invalidInput=function(err){
            return res.status(400).json({"error":errr});
        };
        next();
    });
    router.use(function(req,res,next){
        res.success=function(resp){
            return res.status(200).json(resp);
        };
        next();
    });
    //crud operations on employee Details

    router.get('/employeesList', (req, res) => {
        try {
            employees.find({}, (err, employees) => {
                if (err) {
                    res.invalidInput(err)
                } else {
                    res.success(employees)
                }

            })
        }
        catch (error) {
            res.send(error)
        }
    });

    router.post('/addNewEmployee', function (req, res) {
        try {
            let newEmployeeData = new employees(req.body);
            newEmployeeData.save(function (err, newEmployeeData) {
                if (err) {

                    res.invalidInput(err)
                }
                res.success(newEmployeeData);
            })
        }
        catch (error) {
            res.send(error)
        }
    });


    router.put('/updateEmployeeData/:id', function (req, res) {
        try {
            if ((req.params.id) != (req.body._id)) {
                res.send('The given id is not valid');
            } else {
                employees.findOne({ _id: req.body._id }, (err, employees) => {
                    if (err) {
                        res.json({ success: false, message: 'not a valid employee id' })
                    }
                    else {
                        employees.employeeNO = req.body.employeeNO;
                        employees.firstName = req.body.firstName;
                        employees.lastName = req.body.lastName;
                        employees.gender = req.body.gender;
                        employees.dateOfBirth = req.body.dateOfBirth;
                        employees.dateOfJoining = req.body.dateOfJoining;
                        employees.jobTitle = req.body.jobTitle;
                        employees.noOfLeaves = req.body.noOfLeaves;
                        employees.emailId = req.body.emailId;
                        employees.phnNo = req.body.phnNo;
                        employees.save((err) => {
                            if (err) {
                                res.invalidInput(err)
                            } else {
                                res.success( 'employee details Updated!' );
                            }
                        })
                    }
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    })

    router.delete('/deleteEmployeeData/:id', function (req, res) {
        try {
            if ((req.params.id) != (req.body._id)) {
                res.json({ success: false, message: 'employee id not found' });
            } else {
                employees.findOne({ _id: req.body._id }, (err, employees) => {
                    if (err) {
                        res.json({ success: false, message: 'not a valid employee id' })
                    } else {
                        employees.remove((err) => {
                            if (err) {
                                res.invalidInput(err)
                            } else {
                                res.success( 'employee deleted' )
                            }
                        });
                    }
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    });

    //crud operations on project details

    router.get('/projectDetails', (req, res) => {
        try {
            projects.find({}, (err, projects) => {
                if (err) {
                    res.invalidInput(err)
                } else {
                    res.success("projects ")
                }

            })
        }
        catch (error) {
            res.send(error)
        }
    });

    router.post('/addProject', async function (req, res) {
        try {
            let newProjectData = new projects(req.body);
            let employeeData = await employees.findOne({ employeeNO: req.body.employeeNO })
            newProjectData.empId = employeeData._id;
            newProjectData.save(function (err, newProjectData) {
                if (err) {

                    res.invalidInput(err)
                }
                res.success(newProjectData);
            })
        }
        catch (error) {
            res.send(error)
        }
    });

    router.put('/updateProjectData/:id', function (req, res) {
        try {
            if ((req.params.id) != (req.body._id)) {
                res.send('The given id is not valid');
            } else {
                projects.findOne({ _id: req.body._id }, (err, projects) => {
                    if (err) {
                        res.json({ success: false, message: 'not Found' })
                    }
                    else {
                        projects.empId = req.body.empId;
                        projects.projectName = req.body.projectName;
                        projects.projectDuration = req.body.projectDuration;
                        projects.clientName = req.body.clientName;
                        projects.fromDate = req.body.fromDate;
                        projects.toDate = req.body.toDate;
                        projects.save((err) => {
                            if (err) {
                                res.invalidInput(err)
                            } else {
                                res.success('project details Updated!');
                            }
                        })
                    }
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    })

    router.delete('/deleteProject/:id', function (req, res) {
        try {
            if ((req.params.id) != (req.body._id)) {
                res.json({ success: false, message: 'Invalid id' });
            } else {
                projects.findOne({ _id: req.body._id }, (err, projects) => {
                    if (err) {
                        res.json({ success: false, message: 'not a valid id' })
                    } else {
                        projects.remove((err) => {
                            if (err) {
                                res.invalidInput(err)
                            } else {
                                res.success( 'project deleted')
                            }
                        });
                    }
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    });





    //crud operations on salary details

    router.get('/salaryDetails', (req, res) => {
        try {
            salary.find({}, (err, salary) => {
                if (err) {
                    res.invalidInput(err)
                } else {
                    res.success("salary")
                }

            })
        }
        catch (error) {
            res.send(error)
        }
    });

    router.post('/addsalaryDetails', async function (req, res) {
        try {
            let newSalaryData = new salary(req.body);
            let employeeData = await employees.findOne({ employeeNO: req.body.employeeNO });
            newSalaryData.empId = employeeData._id;
            newSalaryData.save(function (err, newSalaryData) {
                if (err) {

                    res.invalidInput(err)
                }
                res.success(newSalaryData);
            })
        }
        catch (error) {
            res.send(error)
        }
    });


    //crud operations on working hrs

    router.get('/workingDetails', (req, res) => {
        try {
            workhrs.find({}, (err, workhrs) => {
                if (err) {
                    res.invalidInput(err)
                } else {
                    res.success("workhrs")
                }

            })
        }
        catch (error) {
            res.send(error)
        }
    });

    router.post('/addWorkDetails', async function (req, res) {
        try {
            let newWorkDetails = new workhrs(req.body);
            let employeeData = await employees.findOne({ employeeNO: req.body.employeeNO })
            newWorkDetails.empId = employeeData._id;
            newWorkDetails.save(function (err, newProjectData) {
                if (err) {

                    res.invalidInput(err)
                }
                res.success(newWorkDetails);
            })
        }
        catch (error) {
            res.send(error)
        }
    });

    router.put('/updateWorkHrs/:id', function (req, res) {
        try {
            if ((req.params.id) != (req.body._id)) {
                res.send('Invalid Id');
            } else {
                workhrs.findOne({ _id: req.body._id }, (err, workhrs) => {
                    if (err) {
                        res.json({ success: false, message: 'not Found' })
                    }
                    else {
                        workhrs.empId = req.body.empId;
                        workhrs.date = req.body.date;
                        workhrs.clockIn_time = req.body.clockIn_time;
                        workhrs.clockOut_time = req.body.clockOut_time;
                        workhrs.save((err) => {
                            if (err) {
                                res.invalidInput(err)
                            } else {
                                res.success('Details Updated!');
                            }
                        })
                    }
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    })

}