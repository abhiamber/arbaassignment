const express = require("express");
const app = express.Router();
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
require("dotenv").config();

// **********singup*******************
app.post("/signin", async (req, res) => {
  const { fullName, userName, email, avatar, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (user) {
    return res.json({
      status: "NO",
      message: "User Already Exists, Please Signup with Different Credentials",
    });
  }
  try {
    const newUser = new UserModel({
      fullName,
      userName,
      email,
      avatar,
      password,
    });
    await newUser.save();
    return res.json({ status: "OK", message: "Send the Correct Token" });
  } catch (e) {
    return res.json({ status: "NO", message: e });
  }
});

// *******************login****************
app.post("/login", async (req, res) => {
  const { userName, password, id } = req.body;
  // console.log(userName);
  let user = await UserModel.findOne({ userName });
  // console.log(user);
  if (!user) {
    return res.send({ message: "user not found", status: "NO" });
  }
  try {
    if (password !== user.password) {
      return res.status(401).send({ message: "Unauthorized", status: "NO" });
    } else {
      const token = jwt.sign(
        {
          id: user._id,
          fullName: user.fullName,
          userName: user.userName,
          email: user.email,
          avatar: user.avatar,
        },
        process.env.token_password,
        { expiresIn: "365d" }
      );

      return res.json({
        message: token,
        status: "OK",
      });
    }
  } catch (e) {
    return res.json({ message: e, status: "NO" });
  }
});

// ************Update the user from list****************
app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { fullName, avatar, password } = req.body;
  try {
    if (fullName && avatar && password) {
      await UserModel.findByIdAndUpdate(
        { _id: id },
        { fullName, avatar, password }
      );
    } else if (avatar && password) {
      await UserModel.findByIdAndUpdate({ _id: id }, { avatar, password });
    } else if (fullName && password) {
      await UserModel.findByIdAndUpdate({ _id: id }, { fullName, password });
    } else if (avatar) {
      await UserModel.findByIdAndUpdate({ _id: id }, { avatar });
    } else if (fullName) {
      await UserModel.findByIdAndUpdate({ _id: id }, { fullName });
    } else if (password) {
      await UserModel.findByIdAndUpdate({ _id: id }, { password });
    }
    let user = await UserModel.findById({ _id: id });

    const token = jwt.sign(
      {
        id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        email: user.email,
        avatar: user.avatar,
      },
      process.env.token_password,
      { expiresIn: "365d" }
    );
    res.send({ message: token, status: "OK" });
  } catch (err) {
    res.status(404).send({ message: err, status: "NO" });
  }
});

// ************Remove the user from list****************

// app.delete("/delete/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     await UserModel.findByIdAndDelete({ _id: id });
//     return res.status(200).send({ msg: "Delete Successfully User" });
//   } catch (e) {
//     res.status(404).send({ Error: err.message });
//   }
// });

module.exports = app;
