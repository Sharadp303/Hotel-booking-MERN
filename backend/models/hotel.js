const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
        hotelName:{
          type:String,
          required:true
        },
        city:{type:String,required:true},
        state:{type:String,required:true},
        country:{type:String,required:true},
        rooms:{
          type:[mongoose.Schema.Types.ObjectId],
          ref:'Rooms'
        }
});

module.exports = mongoose.model("Hotels", hotelSchema);
