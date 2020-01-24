const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/reserve", (req, res, next) => {
  // obtener las horas disponibles por semana
  const days = {
    monday: ["11:00", "12:00"],
    tuesday: ["11:00", "12:00"],
    wednesday: ["11:00", "13:00"]
  };
  res.render('reserve', {days});
});

module.exports = router;
