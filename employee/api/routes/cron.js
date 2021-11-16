
cron=require("node-cron");
let shell=require("shelljs");

cron.schedule('0 9 * * * ',()=>{
    console.log("Running a task everyday at 9am ");
    if(shell.exec("node login.js").code!==0){
        console.log("something went wrong");
    }
});
    cron.schedule('0 18 * * * ',()=>{
        console.log("Running a task everyday at  6pm");
        if(shell.exec("node logout.js").code!==0){
            console.log("something went wrong");
        }
    
});
