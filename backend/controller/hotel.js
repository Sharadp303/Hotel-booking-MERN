const Hotels= require("../models/hotel");

//CREATE
async function createHotel(req, res) {
  try {
    const {hotelName}=req.body

    const existingHotel=await Hotels.findOne({hotelName})
    if(existingHotel){
      return res.status(400).json("Hotel Already exists")
    }

    const hotel = new Hotels(req.body);
    await hotel.save();
    res.status(201).json(hotel);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

//UPDATE
async function updateHotel(req, res) {
  try {
    const id = req.params.id;
    const updatedHotel = await Hotels.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

//DELETE
async function deleteHotel(req, res) {
  try {
    const id = req.params.id;
    await Hotels.findByIdAndDelete(id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

//GET
async function getHotel(req, res) {
  try {
    const id = req.params.id;
    const hotel = await Hotels.findById(id);
    res.status(200).json(hotel);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

//GETALL
async function getAllHotel(req, res) {
  try {
    const {city}=req.query;
    const hotels = await Hotels.find({city});
    res.status(200).json(hotels);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel
};
