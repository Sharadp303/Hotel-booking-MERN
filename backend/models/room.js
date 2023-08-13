const mongoose=require('mongoose')

const roomSchema=new mongoose.Schema({
    roomNumber:{
        type:Number,
        required:true,
    },
    roomType:{
        type:String,
        required:[true,['Standard','Deluxe','Luxury']],     
    },
    capacity:{
        type:Number,
        default:1,
    },
    roomImages:{
        type:[String],
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        default:false
    },
    
},{timestamps:true})

module.exports=mongoose.model('Rooms',roomSchema)