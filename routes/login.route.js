const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

router.get("/", (req, res, next) => {
  res.render("login");
});

router.post("/", async (req, res, next) => {
  try {
    res.redirect("profile");
    // const { email, password } = req.body;
    // console.log(req.body);

    // if (!email || !password) {
    //   return res.render("login", {
    //     message: "Todos los campos son obligatorios."
    //   });
    // }

    // const doctor = await Doctor.findOne({ email });
    // const patient = await Patient.findOne({ email });
    // console.log(doctor);
    // console.log(patient);

    // if (!doctor || !patient) {
    //   return res.render("login", {
    //     message: "El usuario no existe."
    //   });
    // } else {
    //   if (
    //     bcrypt.compareSync(password, patient.password) ||
    //     bcrypt.compareSync(password, doctor.password)
    //   ) {
    //     req.session.currentUser = user;
    //     res.redirect("profile");
    //   } else {
    //     res.render("login", {
    //       message: "Los campos no coinciden."
    //     });
    //   }
    // }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
