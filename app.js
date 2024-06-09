const productsRouter = require("./apis/products/routes");
const express = require("express");
const connectDB = require("./database");
const app = express();

app.use(express.json());

app.use("/products", productsRouter);

connectDB();

app.listen(8000, () => {
  console.log("I am running on port 8000");
});
