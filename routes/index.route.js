const express = require("express");
const router = express.Router();
const axios = require("axios");
const Doctor = require("../models/Doctor");
const FormData = require("form-data");
const Patient = require("../models/Patient");

router.get("/", async (req, res, next) => {
  const user = req.session.currentUser;

  // try {
  //   const data = new FormData();
  //   data.append(
  //     "json",
  //     JSON.stringify({
  //       maxResult: "1000",
  //       nombre: "",
  //       paterno: "",
  //       materno: "",
  //       idCedula: "8134801"
  //     })
  //   );
  //   const iD = await axios.post(
  //     "https://www.cedulaprofesional.sep.gob.mx/cedula/buscaCedulaJson.action",
  //     data
  //   );
  //   console.log(iD);
  // } catch (error) {
  //   console.log(error);
  // }

  res.render("index", { user });

  if (!user) {
    res.render("index");
  }
});

router.get("/logout", (req, res, next) => {
  req.session.destroy(err => {
    res.redirect("/");
  });
});

router.get("/patients", (req, res, next) => {
  Patient.find()
    .then(patients => {
      res.render("patients", { patients });
    })
    .catch(err =>
      console.log("Error while getting the patients from DB:", err)
    );
});

router.get("/reserve", (req, res, next) => {
  // obtener las horas disponibles por semana
  /*
  const data = [
    {Fecha: [{citaHora, citaID}, {}, {}, ...]},
    {},
    {},
    ...];
  */
  const days = {
    Lunes: ["10:00", "11:00"],
    Martes: ["12:00", "13:00"],
    Miércoles: ["15:00", "16:00"]
  };
  res.render("reserve", { days });
});

module.exports = router;
