const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

},{timestamps:true})

module.exports=mongoose.model('Users',userSchema)