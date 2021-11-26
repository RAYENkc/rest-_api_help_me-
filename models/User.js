const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
     nom :{
         type : String,
         required : true
     },
     prenom : {
        type : String,
        required : true
    },
     age : {
        type : Number,
        required : true
    } ,
     profession : {
        type : String,
        required : true
    } ,
     role :{
        type : String,
        required : true
    } ,
     niveaux :{
        type : String,
        required : true
    } 
})

module.exports = mongoose.model('Users',userSchema)