const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const CategorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      required: [true, "Category name is required"],
      trim: true,
      unique: [true, "Category name is already exist"],
    },
    locationDetailId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LocationDetail",
    },
  },
  { timestamps: true }
);

// const _categorySchema = mongoose.model("Category", CategorySchema);
module.exports = mongoose.model("Category", CategorySchema);
