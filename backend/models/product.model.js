const { Schema, model } = require("mongoose");

const prodSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String, required: true },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    price: Number,

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const ProdModel = model("prod", prodSchema);

module.exports = ProdModel;
