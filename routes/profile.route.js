const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
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
    return res.status(404).render("not-found");
  }

  const user = await Doctor.findById(personId);
  if (!user) {
    return res.status(404).render("not-found");
  }
  res.render("profile", { user });
});

router.get("/patient/edit", (req, res, next) => {
  const user = req.session.currentUser;
  res.render("editProfilePatient", { user });
});

router.post('/patient/edit', async (req, res, next) => {
  const user = req.session.currentUser;
  const personId = user._id;
  const oldPass = req.body.contraseña;
  const newPass = req.body.newPassword;
  const confirmPass = req.body.confirmPassword;

  if (newPass === confirmPass && bcrypt.compareSync(oldPass, user.password)){
  const data = { 
    name,
    paternalLastName,
    maternalLastName,
    email
  } = req.body;
  
  if (newPass){
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(newPass, salt);
    data.password = hashPass;
  }

  await Patient.findByIdAndUpdate(personId, {$set: data});
  res.redirect(`/profile/patient/${personId}`);
  } else {
  return res.render("editProfilePatient", {
    user,
    messagePat: "Las contraseñas no coinciden"
  });
  }
});

router.get("/patient/:personId", async (req, res, next) => {
  let personId = req.params.personId;
  if (!/^[0-9a-fA-F]{24}$/.test(personId)) {
    return res.status(404).render("not-found");
  }

  const user = await Patient.findById(personId);
  if (!user) {
    return res.status(404).render("not-found");
  }
  res.render("profile-patient", { user });
});

module.exports = router;
