const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
  getCheapProducts,
} = require("./controllers");

const express = require("express");
const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/getCheap", getCheapProducts);

productsRouter.get("/:id", getProductById);

productsRouter.post("/", createProduct);

productsRouter.put("/:id", updateProduct);

productsRouter.delete("/:id", deleteProductById);

module.exports = productsRouter;
