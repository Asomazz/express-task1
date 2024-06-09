const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alzemamia:em6qmgVZhWbHunl7@cluster0.uz9eadd.mongodb.net/"
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log("Erro, trying to connect to DB", error);
  }
};

module.exports = connectDB;
