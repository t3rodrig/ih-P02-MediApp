const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

router.get("/", async (req, res, next) => {
  const user = req.session.currentUser;

  try {
    await Doctor.find(req.query.search_query).then(doctors => {
      if (user) {
        res.render("search", { user, doctors });
      } else {
        res.render("search", { doctors });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
