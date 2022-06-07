const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: [true, "username is already exist"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      unique: [true, "Password should be unique"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", AdminSchema);
