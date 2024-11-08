const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const vendorroute = require("./routes/vendorrouter")
const bodyparser = require('body-parser')

const app = express()

const port = 4000
dotEnv.config()
mongoose.connect(process.env.mongodb)
.then(()=>{
    console.log("mongodb connected")
}).catch((error)=>{
    console.log(`mongodb connection error ${error}`)
})


app.use('/home',(req,res)=>{
    res.send("list of users")
})

app.use(bodyparser.json())

app.use("/vendor",vendorroute)

app.listen(port,(req,res)=>{
    console.log(`server connect successfully ${port}`)
})