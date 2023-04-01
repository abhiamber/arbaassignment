const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const connect = require("./config/db");
const UserRoutes = require("./routes/user.route");
const CategoryRoute = require("./routes/category.route");
const ProdRoute = require("./routes/product.route");

const PORT = process.env.PORT || 8080;
const cors = require("cors");
const { urlencoded } = require("express");
app.use(urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("yahoo!!!");
});

app.use("/user", UserRoutes);
app.use("/prod", ProdRoute);
app.use("/cat", CategoryRoute);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("connected to DB", PORT);
  } catch (e) {
    console.log({ message: e.message });
  }
});
