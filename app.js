const productsRouter = require("./apis/products/routes");
const express = require("express");
const connectDB = require("./database");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());

app.use("/products", productsRouter);

connectDB();

app.listen(process.env.PORT, () => {
  console.log("I am running on port ", process.env.PORT);
});
