const express = require("express");
const app = express.Router();

const CategoryModel = require("../models/category.model");

// *************add product****************

app.post("/", async (req, res) => {
  const { name, slug, image, owner } = req.body;
  console.log(req.body);
  try {
    let category = new CategoryModel({
      name,
      slug,
      image,
      owner,
    });

    await category.save();
    // console.log(category);
    return res.status(200).send({ status: "OK", category });
  } catch (e) {
    console.log(e.message);
    return res.send({ message: e, status: "NO" });
  }
});

app.get("/", async (req, res) => {
  const { query } = req.query;

  try {
    if (query) {
      let data = await CategoryModel.find(
        { owner },
        {
          name: { $regex: query, $options: "i" },
        }
      );
      return res.send({ message: data, state: "OK" });
    }
    const data = await CategoryModel.find();
    return res.send({ message: data, state: "OK" });
  } catch (e) {
    return res.send({ message: e.message, state: "NOT" });
  }
});

// *******get single cat**************
app.get("/search", async (req, res) => {
  const { query } = req.query;

  try {
    let data = await CategoryModel.findOne({
      name: { $regex: query, $options: "si" },
    });
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
    let data = await CategoryModel.findOne({ _id: id });
    return res.send({ message: data, state: "OK" });
  } catch (e) {
    return res.send({ message: e.message, state: "NOT" });
    // console.log(err);
  }
});

// *********update *********************
// app.patch("/increasequantity", async (req, res) => {
//   let { id, qty } = req.body;
//   let product = await CategoryModel.findOne({ _id: id });
//   // console.log(product.quantity, "name");
//   // console.log(product);

//   try {
//     if (!product) {
//       return res.send({
//         message: "there is not any product with this product ID",
//       });
//     }

//     let totalQunatity = product.quantity + qty;
//     console.log(totalQunatity);
//     let x = await ProdModel.findByIdAndUpdate(
//       { _id: id },
//       { $set: { quantity: totalQunatity } }
//     );

//     return res.send({
//       message: `Product updated with ${totalQunatity} quantity`,
//     });
//   } catch (e) {
//     console.log(e.message);
//     return res.send(e.message);
//   }
// });

// *********update category**************
app.patch("/", async (req, res) => {
  let { name, slug, image, id } = req.body;
  let product = await CategoryModel.findOne({ _id: id });
  // console.log(product.quantity, "name");
  // console.log(product);
  if (!product) {
    return res.send({
      message: "there is not any product with this product ID",
      status: "NO",
    });
  }

  try {
    if (name && slug && image) {
      await CategoryModel.findByIdAndUpdate(
        { _id: id },
        { $set: { name, slug, image } }
      );
    } else if (name && slug) {
      await CategoryModel.findByIdAndUpdate(
        { _id: id },
        { $set: { name, slug } }
      );
    } else if (name && image) {
      await CategoryModel.findByIdAndUpdate(
        { _id: id },
        { $set: { name, image } }
      );
    } else if (image && slug) {
      await CategoryModel.findByIdAndUpdate(
        { _id: id },
        { $set: { image, slug } }
      );
    } else if (image) {
      await CategoryModel.findByIdAndUpdate({ _id: id }, { $set: { image } });
    } else if (slug) {
      await CategoryModel.findByIdAndUpdate({ _id: id }, { $set: { slug } });
    } else if (name) {
      await CategoryModel.findByIdAndUpdate({ _id: id }, { $set: { name } });
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

// *********************delete category*********
app.delete("/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  try {
    await CategoryModel.findByIdAndDelete({ _id: id });
    return res.send({ message: "category delted", status: "Ok" });
  } catch (e) {
    return res.send({ message: e, status: "NO" });
  }
});

module.exports = app;
