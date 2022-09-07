const express = require("express")
const app = express()
require('dotenv').config()
const { initDB } = require('./dbConfig')
const homeRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const cookieParse = require("cookie-parser") 
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")

app.use(express.json())
app.use(express.static("public"))
app.use(express.static('files'))
app.use(cookieParse())
// app.use(bodyParser)


app.use(express.urlencoded({extended:true}))

app.use('/',userRouter)
app.use("/",homeRouter)

// calling nodemailer





// calling DB

initDB()
app.listen(6500,(req, res)=>{
    console.log("server is started at port 6500")
})