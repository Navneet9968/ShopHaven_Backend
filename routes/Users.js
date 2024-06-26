const express = require("express");
const { fetchUserById, updateUser } = require("../controller/User");


const router = express.Router();

// /users is already in the base path

router.get("/own", fetchUserById)
  .patch("/:id", updateUser);

exports.router = router;
