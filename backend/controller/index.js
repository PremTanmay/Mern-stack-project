const { verify } = require("jsonwebtoken");
const { User, verifyPassword } = require("../model");
const { generateToken } = require("../authentication");

async function signUp(req, res) {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(201)
      .json({ message: "user created successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error, user not created", error: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const verifiedUser = await verifyPassword(password, user.password);
    if (!verifiedUser)
      return res.json({ message: "invalid credentiels password not matching" });
    const token = generateToken(user);
        return res.status(200).json({message:"login successful   token=> ", token});
  } catch (error) {
    res.status(500).json({message:"server error during  matching password",error:error.message})
  }
}
module.exports = { signUp ,login};
