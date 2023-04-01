const express = require("express");
const app = express.Router();

const ProdModel = require("../models/product.model");

// *************add product****************

app.post("/", async (req, res) => {
  let { title, description, image, owner, price, category } = req.body;
  price = price ? Number(price) : price;
  // console.log(typeof Price, req.body);

  try {
    let newProduct = new ProdModel({
      title,
      description,
      image,
      owner,
      price,
      category,
    });

    await newProduct.save();
    // console.log(newProduct);
    return res.send({ status: "OK", message: newProduct });
  } catch (e) {
    return res.send({ message: e, status: "NO" });
  }
});

app.get("/", async (req, res) => {
  const { query, category } = req.query;

  try {
    if (query) {
      let data = await ProdModel.find(
        { owner },
        {
          title: { $regex: query, $options: "i" },
        }
      );
      return res.send({ message: data, state: "OK" });
    }
    const data = await ProdModel.find();
    return res.send({ message: data, state: "OK" });
  } catch (e) {
    return res.send({ message: e.message, state: "NOT" });
  }
});

// *******get single cat**************
app.get("/search", async (req, res) => {
  const { query, owner } = req.query;

  try {
    let data = await ProdModel.find(
      { owner },
      {
        title: query,
      }
    );
    return res.send({ message: data, state: "OK" });
  } catch (e) {
    return res.send({ message: e.message, state: "NOT" });
    // console.log(err);
  }
});

// particluar product

app.get("/productId/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(query, "t");

  try {
    let data = await ProdModel.findOne({ _id: id });
    return res.send({ messg: data, state: "OK" });
  } catch (e) {
    return res.send({ messg: e.message, state: "NOT" });
    // console.log(err);
  }
});

// *********update category**************
app.patch("/", async (req, res) => {
  let { title, description, price, id } = req.body;
  price = price ? Number(price) : price;
  console.log(req.body, " kj k");
  let product = await ProdModel.findOne({ _id: id });
  // console.log(product.quantity, "name");
  // console.log(product);
  if (!product) {
    return res.send({
      message: "there is not any product with this product ID",
      status: "NO",
    });
  }

  try {
    if (title && description && price) {
      await ProdModel.findByIdAndUpdate(
        { _id: id },
        { $set: { title, description, price } }
      );
    } else if (title && description) {
      await ProdModel.findByIdAndUpdate(
        { _id: id },
        { $set: { title, description } }
      );
    } else if (title && price) {
      await ProdModel.findByIdAndUpdate(
        { _id: id },
        { $set: { title, price } }
      );
    } else if (description && price) {
      await ProdModel.findByIdAndUpdate(
        { _id: id },
        { $set: { description, price } }
      );
    } else if (description) {
      await ProdModel.findByIdAndUpdate({ _id: id }, { $set: { description } });
    } else if (price) {
      await ProdModel.findByIdAndUpdate({ _id: id }, { $set: { price } });
    } else if (title) {
      await ProdModel.findByIdAndUpdate({ _id: id }, { $set: { title } });
    }
    return res.send({
      message: `Product updated w`,
      status: "OK",
    });
  } catch (e) {
    // console.log(e.message);
    return res.send({
      message: e,
      status: "NO",
    });
  }
});

// *********update prod image**************
app.patch("/img", async (req, res) => {
  let { image, id } = req.body;
  let product = await ProdModel.findOne({ _id: id });
  // console.log(product.quantity, "name");
  // console.log(product);
  if (!product) {
    return res.send({
      message: "there is not any product with this product ID",
      status: "NO",
    });
  }

  try {
    await ProdModel.findByIdAndUpdate({ _id: id }, { $set: { image } });
    return res.send({
      message: `Product updated w`,
      status: "OK",
    });
  } catch (e) {
    // console.log(e.message);
    return res.send({
      message: e,
      status: "NO",
    });
  }
});

// *********************deleteprod*********
app.delete("/:id", async (req, res) => {
  let { id } = req.params;
  // console.log(id);
  try {
    await ProdModel.findByIdAndDelete({ _id: id });
    return res.send({ message: "done", status: "OK" });
  } catch (e) {
    return res.send(e.message);
  }
});

app.delete("/muti", async (req, res) => {
  let { id } = req.body;
  // console.log(id);
  try {
    await ProdModel.findByIdAndDelete({ _id: id });
    return res.status(200).send("Ok");
  } catch (e) {
    return res.send(e.message);
  }
});

module.exports = app;
