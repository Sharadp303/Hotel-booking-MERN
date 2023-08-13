const mongoose=require('mongoose')

const bookingSchema=new mongoose.Schema({
    userId:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Users'
    },
    checkIn:{
        type:Date,
        required:true
    },
    checkOut:{
        type:Date,
        required:true
    },
    hotelId:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Hotels'
    },
    roomId:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Rooms'
    }

},{timestamps:true})

module.exports=mongoose.model("Bookings",bookingSchema)