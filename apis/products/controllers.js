const Product = require("../../models/Product.js");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ msg: "No product with this ID" });
    }
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    const products = await Product.find();
    return res.status(204).json(products);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const getCheapProducts = async (req, res) => {
  try {
    const product = await Product.find({ price: { $gte: req.query.price } });
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ msg: "No cheap products" });
    }
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
  getCheapProducts,
};
