const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split("")[1];
  if (!token)
    return res.status(401).json({ error: "unauthorized, No token found" });
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid Token" });
  }
};
const generateToken = (user) => {
  const payload = { id: user.id, name: user.firstName };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1020h" });
};
module.exports = { jwtMiddleware, generateToken };
