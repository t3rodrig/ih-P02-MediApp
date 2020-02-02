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

// Get edit profile layout

router.get("/patient/edit", (req, res, next) => {
  const user = req.session.currentUser;
  res.render("editProfilePatient", { user });
});

router.get("/doctor/edit", (req, res, next) => {
  const user = req.session.currentUser;
  res.render("editProfileDoctor", { user });
});

// Get profile layout

router.get("/patient/:patientID", async (req, res, next) => {
  const patient = req.session.currentUser;

  const user = await Patient.findById(patient._id);
  if (!user) {
    return res.render("index");
  }
  res.render("profile-patient", { user });
});

router.get("/doctor/:doctorID", async (req, res, next) => {
  const doctor = req.session.currentUser;

  const user = await Doctor.findById(doctor._id);
  if (!user) {
    return res.status(404).render("not-found");
  }
  res.render("profile-doctor", { user });
});

// Post edit profile

router.post("/patient/edit", async (req, res, next) => {
  const user = req.session.currentUser;
  const personId = user._id;
  const oldPass = req.body.contraseña;
  const newPass = req.body.newPassword;
  const confirmPass = req.body.confirmPassword;

  if (newPass === confirmPass && bcrypt.compareSync(oldPass, user.password)) {
    const data = ({
      name,
      paternalLastName,
      maternalLastName,
      email
    } = req.body);

    if (newPass) {
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(newPass, salt);
      data.password = hashPass;
    }

    await Patient.findByIdAndUpdate(personId, { $set: data });
    res.redirect("/profile/patient");
  } else {
    return res.render("editProfilePatient", {
      user,
      messagePat: "Las contraseñas no coinciden"
    });
  }
});

module.exports = router;
