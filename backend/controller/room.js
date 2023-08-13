const Rooms = require("../models/room");
const Hotels = require("../models/hotel");

async function createRoom(req, res) {
  const hotelId = req.params.hotelid;
  const newRoom = new Rooms(req.body);

  try {
    const savedRoom = await newRoom.save();

    await Hotels.findByIdAndUpdate(hotelId, {
      $push: { rooms: savedRoom._id },
    });

    res.status(201).json({msg:"Room created succussfully",room:savedRoom});
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal server error");
  }
}

//UPDATE
async function updateRoom(req, res) {
  try {
    const id = req.params.id;
    const updatedRoom = await Rooms.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

//DELETE
async function deleteRoom(req, res) {
  try {
    const {id,hotelid}= req.params;
   
    const deletedRoom=await Rooms.findByIdAndDelete(id);
  
    await Hotels.findByIdAndUpdate(hotelid,{
      $pull: { rooms:deletedRoom._id },
    })
    
    res.status(200).json("Room has been deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

//GET
async function getRoom(req, res) {
  try {
    const id = req.params.id;
    const rooms = await Rooms.findById(id);
    res.status(200).json(rooms);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

//GETALL
async function getAllRooms(req, res) {
  try {
    const rooms = await Rooms.find();
    res.status(200).json(rooms);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}


module.exports={createRoom,updateRoom,deleteRoom,getRoom,getAllRooms}
