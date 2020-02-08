const express = require("express");
const router = express.Router();
const axios = require("axios");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

router.get("/", async (req, res, next) => {
  const user = req.session.currentUser;

  try {
    if (!user) {
      return res.redirect("/");
    } else if (user.role === "doctor") {
      const patients = await Patient.find();
      return res.render("prescription", { user, patients });
    } else {
      return res.redirect("/");
    }
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

router.get("/getPatientInfo", async (req, res, next) => {
  const user = req.session.currentUser;
  const patientId = req.query.patient;

  try {
    console.log(patientId);
    const patient = await Patient.findById(patientId);
    console.log(patient);
    res.render("prescription", { user, patient });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

module.exports = router;
