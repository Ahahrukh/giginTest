const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    Book_ID:String,
 Title:String,
 Author_ID:String,
Publisher:String,
 Publish_Date:String,
 Category:String,
 Price:Number,
 Sold_Count:Number,
 Book_Image_link:String

})

const addBookToCatalog=mongoose.model("book",bookSchema)

module.exports=addBookToCatalog