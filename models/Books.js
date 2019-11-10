const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true,"Please add a title"],
        trim: true
    },
   authors:{
        type:[String],
        require:true
   },
   description:{
        type:String,
        trim:true
   } ,
   image:{
        type:String,
        match: [
            /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
          ],
          default:"",
          sparse:true,
          trim: true
   },
   link:{
    type:String,
    match: [
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      ],
      default:"No-photo",
      unique:true,
      sparse:true,
      trim: true
   },
  
})

module.exports= mongoose.model('Books',BooksSchema)