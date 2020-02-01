const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

router.get("/", (req, res, next) => {
  const user = req.session.currentUser;

  if (!user) {
    res.render("search");
  }
  res.render("search", { user });
});

module.exports = router;
