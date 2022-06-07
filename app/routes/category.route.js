const express = require("express");
const router = express.Router();
const multer = require("multer")();
const authToken = require("../middleware/authToken");

const {
  createCategory,
  listAllCategory,
} = require("../controllers/category.controller");

router.post("/create", [multer.none(), authToken], createCategory);
router.post("/list", [multer.none()], listAllCategory);

module.exports = router;
