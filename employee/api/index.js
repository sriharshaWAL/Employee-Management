const express=require('express')
const router=express.Router()
require('./routes/management')(router)

module.exports=router