const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

router.get("/", (req, res, next) => {
  res.render("login");
});

router.post("/doctor", async (req, res, next) => {
  try {

    const email = req.body.inputEmail;
    const password = req.body.inputPassword;

    if (!email || !password) {
      return res.render("login", {
        messageDoc: "Todos los campos son obligatorios."
      });
    }

    // const doctor = await Doctor.findOne({ email });
    // console.log(doctor);

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

router.post("/patient", async (req, res, next) => {
  try {
    // res.redirect("/profile");
    const email = req.body.inputEmail;
    const password = req.body.inputPassword;

    if (!email || !password) {
      return res.render("login", {
        messagePat: "Todos los campos son obligatorios."
      });
    }

    const patient = await Patient.findOne({ email });
    console.log(patient);

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
