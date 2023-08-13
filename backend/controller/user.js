const Users=require('../models/user')
const bcrypt=require("bcryptjs")

//CREATE
async function createUser(req, res) {
  try {

    const { username, email, password } = req.body;

    const user = await Users.findOne({ username });
    if (user) {
      return res.status(400).json("User already exists");
    }

    await Users.create({
      username,
      email,
      password: await bcrypt.hashSync(password, 10),
    });

    res.status(201).json("user created");
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

//UPDATE
async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const updatedUser = await Users.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

//DELETE
async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    await Users.findByIdAndDelete(id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

//GET
async function getUser(req, res) {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

//GETALL
async function getAllUser(req, res) {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

module.exports = {
  createUser,updateUser,deleteUser,getUser,getAllUser
};
