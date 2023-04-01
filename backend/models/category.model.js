const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    name: { type: String },
    slug: { type: String, required: true },
    image: { type: String, required: true },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const CategoryModel = model("Category", CategorySchema);

module.exports = CategoryModel;
