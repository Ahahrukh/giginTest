const express=require('express')
const connection = require('./config/connection')
const authorRouter = require('./routes/author.route')
const bookRouter = require('./routes/book.route')

const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Its Home")
})
app.use("/addBooksCatlog",bookRouter)
app.use("/addAnAuthor",authorRouter)
app.listen(4000,async()=>{
    try {
        await connection
        console.log("connected to connection")
    } catch (error) {
        console.log(error)
    }
    console.log("connected to the 4000")
})