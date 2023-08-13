const {
  createRoom,
  updateRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
} = require("../controller/room");
const { verifyToken } = require("../middleware/auth.middleware");


module.exports = function (app) {
  app.post("/api/room/create/:hotelid", createRoom);
  app.put("/api/room/:id", updateRoom),
  app.delete("/api/room/:hotelid/:id", deleteRoom),
  app.get("/api/room/:id", [], getRoom),
  app.get("/api/rooms", [], getAllRooms);
};
