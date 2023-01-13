const mongoose=require('mongoose')
mongoose.set('strictQuery', true);
let connection=mongoose.connect('mongodb://127.0.0.1:27017/book_catlog')

module.exports=connection