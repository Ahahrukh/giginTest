const mongoose=require('mongoose')

const discountSchema=new mongoose.Schema({
    Book_ID:String,
Discount_percent_age:String
 

})

const discount=mongoose.model("discount",discountSchema)

module.exports=discount