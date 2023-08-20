const Users = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {signUpValidation,loginValidation}=require('./joiValidation/auth.joi')



async function signUp(req, res) {
  try {
    const { fullName,email,password,phone } = req.body;

    const {error} =await signUpValidation.validate(req.body);
    
    if (error) {
      return res.status(400).json(error.details[0].message);
    }

    const user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json("User already exists");
    }

    await Users.create({
      fullName,
      phone,
      email,
      password: await bcrypt.hashSync(password, 10),
    });

    res.status(201).json("Signed Up Succesfully");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}


async function login(req, res) {
  try {
    const { email, password } = req.body;

    const ValidationResult = loginValidation.validate(req.body);
    if(ValidationResult.error){
      return res.status(400).json(ValidationResult.error.details[0].message)
    }

    const user = await Users.findOne({ email });
    
    if (!user) {
      return res.status(400).json("INVALID USERNAME or PASSWORD");
    }

    const validPassword = await bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json("INVALID USERNAME or PASSWORD");
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({token:token});

  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
}

module.exports = { signUp, login };
