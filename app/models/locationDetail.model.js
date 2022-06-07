const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const CategorySchema = new mongoose.Schema(
  {
    business_name: {
      type: String,
      required: [true, "Business name is required"],
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
      required: [true, "Phone no is required"],
    },
    website_url: {
      type: String,
      trim: true,
      required: [true, "website url number is required"],
    },
    address_1: {
      type: String,
      trim: true,
      required: [true, "Address is required"],
    },
    address_2: {
      type: String,
      trim: true,
    },
    landmark: {
      type: String,
      trim: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    proceeded: {
      type: Boolean,
      default: false,
    },
    services: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

// const _categorySchema = mongoose.model("Category", CategorySchema);
module.exports = mongoose.model("LocationDetail", CategorySchema);
