const express = require("express");
const router = express.Router();
// const uploadCloud = require("../config/cloudinary");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

router.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
});


router.get("/doctor/:personId", async (req, res, next) => {
  let personId = req.params.personId;
  if (!/^[0-9a-fA-F]{24}$/.test(personId)) { 
    return res.status(404).render('not-found');
  }

  const user = await Doctor.findById(personId);
  if (!user) {
    return res.status(404).render('not-found');
  }
  res.render("profile", { user });
});


router.get("/patient/edit", (req, res, next) => {
  let personId = req.query.personId;
  if (!/^[0-9a-fA-F]{24}$/.test(personId)) { 
    return res.status(404).render('not-found');
  }

  const user = req.session.currentUser;
  if (personId !== user._id){
    return res.status(404).render('not-found');
  }

  res.render("editProfile", { user });
});

router.get("/patient/:personId", async (req, res, next) => {
  let personId = req.params.personId;
  if (!/^[0-9a-fA-F]{24}$/.test(personId)) { 
    return res.status(404).render('not-found');
  }

  const user = await Patient.findById(personId);
  if (!user) {
    return res.status(404).render('not-found');
  }
  res.render("profile", { user });
});

module.exports = router;
