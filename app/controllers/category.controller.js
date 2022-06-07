const Category = require("../models/category.model");

const createCategory = async (req, res) => {
  const { category_name } = req.body;
  try {
    await Category.create({ category_name: category_name }).then((data) => {
      console.log(data);
      res.status(201).json({ message: "Successfully created!" });
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Error occured" });
  }
};

const listAllCategory = async (req, res) => {
  try {
    await Category.find({}).then((data) => {
      res.status(201).json(data);
    });
  } catch (error) {
    res.status(501).json({ massage: "Error occured!" });
  }
};

module.exports = {
  createCategory,
  listAllCategory,
};
