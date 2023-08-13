const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel
} = require("../controller/hotel");

const { verifyToken } = require("../middleware/auth.middleware");

module.exports = function (app) {
  app.post("/api/hotel/create", createHotel),
  app.put("/api/hotel/:id", updateHotel),
  app.delete("/api/hotel/:id", deleteHotel),
  app.get("/api/hotel/:id",[verifyToken],getHotel),
  app.get("/api/hotels",[],getAllHotel)
};
