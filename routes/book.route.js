const express=require('express')
const addBookToCatalog = require('../models/books.model')

const bookRouter=express.Router()

bookRouter.post("/addBook",async(req,res)=>{
    let booksmodel=new addBookToCatalog({...req.body})
    await booksmodel.save()
    res.send("success")
})

bookRouter.get("/allBook",async(req,res)=>{
    let allbooks=await addBookToCatalog.find()
    res.send(allbooks)
})
bookRouter.get("/allCategory",async(req,res)=>{
    
    let allbooks=await addBookToCatalog.find()
   for(let i=0;i<allbooks.length;i++){
     res.send(allbooks[i].Category)
   }
})
bookRouter.get("/mostSold",async(req,res)=>{
    
    let allbooks=await addBookToCatalog.find()
    allbooks.sort((a,b)=>{
        return b.Sold_Count - a.Sold_Count
    })
    
    for(let i=0;i<allbooks.length;i++){
        res.send({"res1":allbooks[i].Author_ID,"res2":allbooks[i].Category})
       
      }
    
})

bookRouter.get("/search",async(req,res)=>{
    let {Title,Auther_Name}=req.body
    let allbooks=await addBookToCatalog.find({Title:Title})
    
    res.send(allbooks)
})



module.exports=bookRouter