const mongoose = require('../db/mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true,
        uppercase:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter a valid Email Address')
            }
        }
    },
    gender:{
        type:Boolean,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
})

module.exports = User