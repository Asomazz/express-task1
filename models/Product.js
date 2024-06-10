const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String },
  image: { type: String },
  description: { type: String },
  color: { type: String },
  quantity: { type: Number },
  price: { type: Number, required: true, default: 100 },
});

module.exports = mongoose.model("Product", productSchema);
