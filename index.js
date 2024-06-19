const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./controller/Product");
const port = 8080;
const productsRouter = require("./routes/Products");
const brandsRouter = require("./routes/Brands");
const categoriesRouter = require("./routes/Categories");
const cors = require("cors");

server.use(
  cors({
    exposedHeaders: ["X-Total-Count"]
  })
);
server.use(express.json()); //to parse req.body from frontend
server.use("/products", productsRouter.router);
server.use("/brands", brandsRouter.router);
server.use("/categories", categoriesRouter.router);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("Connected to MongoDB");
}

server.get("/", (req, res) => {
  res.json({ status: "Hello Customer!" });
});

server.listen(port, () => {
  console.log(`Example server listening at http://localhost:${port}`);
});
