const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../middleware/generateToken");

const createAdmin = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    await Admin.create({ username: username, password: hashedPassword }).then(
      (data) => {
        console.log(data);
        res.status(201).json({ massage: "Successfully created!" });
      }
    );
  } catch (err) {
    console.log(err, "errPlease");
    res.status(500).json({ massage: "error occured!" });
  }
};

const signinAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = { username: username };
    const findAdmin = await Admin.findOne({ username: username })
      .exec()
      .then((result) => {
        if (result) {
          bcrypt.compare(password, result.password).then((match) => {
            if (match) {
              const accessToken = generateAccessToken(admin);
              const refreshToken = generateRefreshToken(admin);
              res.status(201).json({
                message: "Successfully signed in",
                access_token: accessToken,
                refresh_token: refreshToken,
              });
            } else {
              res.status(401).json({ message: "wrong username or password" });
            }
          });
        } else {
          res.status(401).json({ message: "username is not exist" });
        }
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error in admin sign-in" });
  }
};

module.exports = {
  createAdmin,
  signinAdmin,
};
