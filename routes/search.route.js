const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

router.get("/", async (req, res, next) => {
  const user = req.session.currentUser;
  const search = req.query;
  console.log(req.query);

  try {
    await Doctor.find(search).then(doctors => {
      if (user) {
        res.render("search", { user, doctors });
      } else {
        res.render("search", { doctors });
      }
    });
  } catch (error) {
    console.log(error);
    res.render("not-found");
  }
});

router.get("/advanced", async (req, res, next) => {
  const user = req.session.currentUser;
  const data = req.query;
  console.log(req.query);

  try {
    await Doctor.find(data).then(doctors => {
      if (user) {
        res.render("search-advanced", { user, doctors });
      } else {
        res.render("search-advanced", doctors);
      }
    });
  } catch (error) {
    console.log(error);
    res.render("not-found");
  }
});

module.exports = router;
