const LocationDetail = require("../models/locationDetail.model");

const createLocationDetail = async (req, res) => {
  const {
    business_name,
    phone,
    website_url,
    address_1,
    address_2,
    landmark,
    latitude,
    longitude,
    proceeded,
    services,
  } = req.body;

  try {
    await LocationDetail.create({
      business_name: business_name,
      phone: phone,
      website_url: website_url,
      address_1: address_1,
      address_2: address_2,
      landmark: landmark,
      latitude: latitude,
      longitude: longitude,
      services: services,
      proceeded: proceeded,
    }).then((data) => {
      res.status(201).json({ message: "Successfully created" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error Occured" });
  }
};

const listAllLocationDetail = async (req, res) => {
  await LocationDetail.find({})
    .populate("services")
    .then((data) => {
      res.status(201).json(data);
    });
};

const getLocationDetail = async (req, res) => {
  const { id } = req.params;
  try {
    await LocationDetail.findById(id)
      .populate("services")
      .then((data) => {
        console.log("data:", data);
        res.status(201).json(data);
      });
  } catch (error) {
    res.status(501).json({ message: "Error occured" });
  }
};

const updateProceeded = async (req, res) => {
  const { id } = req.params;
  try {
    await LocationDetail.findByIdAndUpdate(id, { proceeded: true }).then(
      (data) => {
        res.status(201).json({ message: "Successfully updated" });
      }
    );
  } catch (error) {
    res.status(501).json({ message: "Error occured" });
  }
};

module.exports = {
  createLocationDetail,
  listAllLocationDetail,
  getLocationDetail,
  updateProceeded,
};
