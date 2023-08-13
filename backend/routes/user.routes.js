const { createUser, updateUser, deleteUser, getAllUser, getUser } = require("../controller/user");
const { verifyToken, isAdmin } = require("../middleware/auth.middleware");

module.exports = function (app) {
  app.post("/api/user/create", createUser),
  app.put("/api/user/:id", updateUser),
  app.delete("/api/user/:id", deleteUser),
  app.get("/api/user/:id",[verifyToken],getUser),
  app.get("/users",[verifyToken,isAdmin],getAllUser)
};