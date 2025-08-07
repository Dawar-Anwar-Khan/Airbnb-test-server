const path = require('path')
const express = require('express')
const hostRouter = express.Router()
const rootDir = require('../utils/pathUtil')

hostRouter.get("/contact-us",(req, res, next) => {
    console.log(req.url, req.method)
    res.sendFile(path.join(rootDir, "views" , "contactUs.html"))
})

hostRouter.post('/contact-us', (req,res,next) => {
    console.log("handling /contact-us for post", req.url, req.method, req.body);
    res.sendFile(path.join(rootDir, "views" , "contactedUs.html"))
})

module.exports = hostRouter