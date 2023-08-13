const express = require("express");
const mongoose = require("mongoose");
const cookieParser =require('cookie-parser')
const cors= require('cors')
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors())

// app.use((err,req,res,next)=>{
//     const errorStatus=err.status || 500;
//     const errorMessage=err.message || "something went wrong";

//     return res.status(errorStatus).json({
//         success:false,
//         status:errorStatus,
//         message:errorMessage,
//         stack:err.stack
//     });
// })

require("./routes/hotel.routes")(app);
require("./routes/auth.routes")(app)
require('./routes/user.routes')(app)
require('./routes/room.routes')(app)

mongoose
  .connect(process.env.MONGOURL)
  .then(console.log("Connected to db"))
  .catch((error) => console.log(error));
mongoose.connection.on("disconnected", () => {
  console.log("MONGODB disconnected");
});

app.listen(5566, () => {
  console.log("Connected to server localhost:5566");
});
