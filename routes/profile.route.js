const express = require("express");
const router = express.Router();
const uploadCloud = require("../config/cloudinary");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

router.get("/", (req, res, next) => {
  const user = req.session.currentUser;

  if (!user) {
    res.redirect("/login");
  }

  res.render("profile", user);
});

router.get("/edit", (req, res, next) => {
  res.render("editProfile");
});

module.exports = router;
