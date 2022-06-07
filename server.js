const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./app/config/config");
const Admin = require("./app/routes/admin.route");
const Category = require("./app/routes/category.route");
const LocationDetail = require("./app/routes/locationDetail.route");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./uploads"));
app.use("/v1/api/admin", Admin);
app.use("/v1/api/category", Category);
app.use("/v1/api/location-detail", LocationDetail);

dotenv.config();
const port = process.env.PORT;
const start = async () => {
  try {
    console.log(port, "port");
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
