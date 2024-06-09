const products = require("../../data.js");

const getAllProducts = (req, res) => {
  return res.json(products);
};

const getProductById = (req, res) => {
  const id = req.params.id;

  const product = products.find((product) => {
    return product.id == id;
  });

  if (product) {
    res.json(product);
  } else {
    return res.json("No product with this ID");
  }
};

const addProduct = (req, res) => {
  products.push(req.body);
  return res.json(products);
};

const deleteProductById = (req, res) => {
  const id = req.params.id;

  const products = products.filter((product) => {
    if (product.id == id) {
      return false;
    } else {
      return true;
    }
  });

  if (products) {
    res.json(products);
  } else {
    return res.json("No product with this ID");
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProductById,
};
