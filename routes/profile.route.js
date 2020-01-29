const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

router.get("/", (req, res, next) => {
  res.render("profile");
});

router.get("/edit", (req, res, next) => {
  res.render("editProfile");
});

module.exports = router;
