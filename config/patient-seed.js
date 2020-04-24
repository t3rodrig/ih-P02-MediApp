require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Patient = require("../models/Patient");

mongoose.connect(process.env.URL_DB);

const salt = bcrypt.genSaltSync(10);
const hashPass = bcrypt.hashSync(process.env.DUMMY_PASS, salt);

const patients = [
  {
    firstName: "Fernanda",
    paternalLastName: "Hernández",
    email: "fernanda@example.com",
    password: hashPass
  },
  {
    firstName: "Diana",
    paternalLastName: "García",
    email: "diana@example.com",
    password: hashPass
  },
  {
    firstName: "Andrea",
    paternalLastName: "López",
    email: "andrea@example.com",
    password: hashPass
  },
  {
    firstName: "Ana",
    paternalLastName: "Martínez",
    email: "ana@example.com",
    password: hashPass
  },
  {
    firstName: "María",
    paternalLastName: "Rodríguez",
    email: "maria@example.com",
    password: hashPass
  },
  {
    firstName: "Mariana",
    paternalLastName: "González",
    email: "mariana@example.com",
    password: hashPass
  },
  {
    firstName: "Daniela",
    paternalLastName: "Pérez",
    email: "daniela@example.com",
    password: hashPass
  },
  {
    firstName: "Alejandra",
    paternalLastName: "Sánchez",
    email: "alejandra@example.com",
    password: hashPass
  },
  {
    firstName: "Adriana",
    paternalLastName: "Gómez",
    email: "adriana@example.com",
    password: hashPass
  },
  {
    firstName: "Karla",
    paternalLastName: "Flores",
    email: "karla@example.com",
    password: hashPass
  }
];

Patient.deleteMany()
.then(() => {
  return Patient.create(patients);
})
.then(newPatients => {
  console.log(`${newPatients.length} patients created with the following id:`);
  console.log(newPatients.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect();
})
.catch(err => {
  mongoose.disconnect();
  throw err;
});