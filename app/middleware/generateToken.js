const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: "10d" });
};

const generateRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
