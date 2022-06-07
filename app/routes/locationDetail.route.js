const express = require("express");
const router = express.Router();
const multer = require("multer")();

const {
  createLocationDetail,
  listAllLocationDetail,
  getLocationDetail,
  updateProceeded,
} = require("../controllers/locationDetail.controller");

router.post("/create", [multer.none()], createLocationDetail);
router.post("/list", [multer.none()], listAllLocationDetail);
router.post("/:id", [multer.none()], getLocationDetail);
router.put("/update-proceeded/:id", [multer.none()], updateProceeded);

module.exports = router;
