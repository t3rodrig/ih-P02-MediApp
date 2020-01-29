const express = require("express");
const router = express.Router();

const Patient = require('../models/patient');

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/patients', (req, res, next) => {
  Patient.find()
    .then(patients => {
      res.render('patients', {patients});
    })
    .catch(err => console.log('Error while getting the patients from DB:', err));
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
    'Lunes': ["10:00", "11:00"],
    'Martes': ["12:00", "13:00"],
    'Miércoles': ["15:00", "16:00"]
  };
  res.render('reserve', {days});
});

module.exports = router;
