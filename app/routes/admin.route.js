const express = require("express");
const router = express.Router();
const multer = require("multer")();

const { createAdmin, signinAdmin } = require("../controllers/admin.controller");

router.post("/signup", [multer.none()], createAdmin);
router.post("/signin", [multer.none()], signinAdmin);

module.exports = router;
