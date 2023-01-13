const mongoose=require('mongoose')

const authorSchema=new mongoose.Schema({
    Author_ID :String,
    Name:String,
    Phone_Number:String,
    Death_Date:String,
    Birth_Date:String,
    Author_Image_link:String

})

const addAnAuthor=mongoose.model("author",authorSchema)

module.exports=addAnAuthor