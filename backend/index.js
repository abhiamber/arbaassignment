const http = require("http");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connect = require("./config/db");
const UserRoutes = require("./models/user.model");
const ProdRoute = require("./models/product.model");
const CartRouter = require("./models/category.model");
// let passport = require("./src/config/google-oauth");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const { urlencoded } = require("express");
app.use(urlencoded({ extended: true }));

app.use(express.json())
app.use(cors());

app.get("/", async (req, res) => {
  res.send("yahoo!!!");
});

app.use("/user", UserRoutes);
app.use("/prod", ProdRoute);
app.use("/cat", CartRouter);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("connected to DB");
  } catch (e) {
    console.log({ message: e.message });
  }
  //   console.log(`Server is running at port ${PORT}`);
});
