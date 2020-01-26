require('dotenv').config();
const mongoose = require('mongoose');
const Patient = require('../models/patient');

const connectDB = require("./db");
connectDB();

Patient.collection.drop();

const patients = [
  {
    name: "Fernanda",
    paternalLastName: "Hernández",
    email: "hello@example.com"
  },
  {
    name: "Diana",
    paternalLastName: "García",
    email: "hello@example.com"
  },  {
    name: "Andrea",
    paternalLastName: "López",
    email: "hello@example.com"
  },  {
    name: "Ana",
    paternalLastName: "Martínez",
    email: "hello@example.com"
  },  {
    name: "María",
    paternalLastName: "Rodríguez",
    email: "hello@example.com"
  },
  {
    name: "Mariana",
    paternalLastName: "González",
    email: "hello@example.com"
  },
  {
    name: "Daniela",
    paternalLastName: "Pérez",
    email: "hello@example.com"
  },  {
    name: "Alejandra",
    paternalLastName: "Sánchez",
    email: "hello@example.com"
  },  {
    name: "Adriana",
    paternalLastName: "Gómez",
    email: "hello@example.com"
  },  {
    name: "Karla",
    paternalLastName: "Flores",
    email: "hello@example.com"
  }
];

Patient.create(patients)
    .then(newPatients => {
        console.log(`Created ${newPatients.length} patients`);
        mongoose.connection.close();
    })
    .catch( err => console.log('error ', err));