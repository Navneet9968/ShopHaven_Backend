const express = require("express");
const { fetchBrands, createBrand } = require("../controller/Brand");

const router = express.Router();

// /products is already in the base path

router.get("/", fetchBrands).post("/", createBrand);

exports.router = router;
