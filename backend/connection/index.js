const mongoose = require("mongoose");

async function connectdb(url) {
  try {
    await mongoose.connect(url);
    console.log("connect to mongoDb");
  } catch (error) {
    console.log("error connectiong to DB", error.message);
  }
}
module.exports = connectdb;
