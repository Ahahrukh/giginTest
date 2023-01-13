const express=require("express")
const addAnAuthor = require("../models/author.model")

const authorRouter=express.Router()

authorRouter.post("/addAuthor",async(req,res)=>{
    const auther=new addAnAuthor({...req.body})
    await auther.save()
    res.send("success")
})

authorRouter.get("/allAuthor",async(req,res)=>{
        const authers= await addAnAuthor.find()

        res.send(authers)
})

module.exports=authorRouter