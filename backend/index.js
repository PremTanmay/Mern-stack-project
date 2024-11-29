const express = require("express");
const connectdb = require("./connection");
const router = require("./router");
const app = express();
app.use(express.json());
connectdb("mongodb://localhost:27017/newproject");
app.use("/", router);

app.listen(8000, () => {
  console.log("db connected");
});
