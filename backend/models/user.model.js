const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const UserModel = model("user", UserSchema);

module.exports = UserModel;
