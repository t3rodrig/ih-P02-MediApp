const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
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
