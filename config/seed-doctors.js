require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Doctor = require("../models/Doctor");

mongoose.connect(process.env.URL_DB);

const salt = bcrypt.genSaltSync(10);
const hashPass = bcrypt.hashSync(process.env.DUMMY_PASS, salt);

const doctors = [
  {
    name: "Ada",
    paternalLastName: "Garza",
    specialty: "Medicina forense",
    email: "ada@doctor.com",
    password: hashPass,
  },
  {
    name: "Barbara",
    paternalLastName: "Sanchez",
    specialty: "Medicina del deporte",
    email: "barbara@doctor.com",
    password: hashPass,
  },
  {
    name: "Cassandra",
    paternalLastName: "Hernandez",
    specialty: "Reumatología",
    email: "cassandra@doctor.com",
    password: hashPass,
  },
  {
    name: "Daryna",
    paternalLastName: "Lopez",
    specialty: "Nefrología",
    email: "daryna@doctor.com",
    password: hashPass,
  },
  {
    name: "Elyssa",
    paternalLastName: "Alvarez",
    specialty: "Urología",
    email: "elyssa@doctor.com",
    password: hashPass,
  },
  {
    name: "Felicia",
    paternalLastName: "Sanchez",
    specialty: "Urología",
    email: "felicia@doctor.com",
    password: hashPass,
  },
  {
    name: "Gloria",
    paternalLastName: "Montiel",
    specialty: "Neurología",
    email: "gloria@doctor.com",
    password: hashPass,
  },
  {
    name: "Helena",
    paternalLastName: "Huerta",
    specialty: "Traumatología",
    email: "helena@doctor.com",
    password: hashPass,
  },
  {
    name: "Isadora",
    paternalLastName: "Contreras",
    specialty: "Urología",
    email: "isadora@doctor.com",
    password: hashPass,
  },
  {
    name: "Julia",
    paternalLastName: "Contreras",
    specialty: "Oncología",
    email: "julia@doctor.com",
    password: hashPass,
  },
  {
    name: "Katya",
    paternalLastName: "Antonio",
    specialty: "Traumatología",
    email: "katya@doctor.com",
    password: hashPass,
  },
  {
    name: "Lisa",
    paternalLastName: "Lopez",
    specialty: "Cardiología",
    email: "lisa@doctor.com",
    password: hashPass,
  },
  {
    name: "Maya",
    paternalLastName: "Aguilar",
    specialty: "Reumatología",
    email: "maya@doctor.com",
    password: hashPass,
  },
  {
    name: "Nadia",
    paternalLastName: "Lopez",
    specialty: "Hematología",
    email: "nadia@doctor.com",
    password: hashPass,
  },
  {
    name: "Olivia",
    paternalLastName: "Hernandez",
    specialty: "Cardiología",
    email: "olivia@doctor.com",
    password: hashPass,
  },
  {
    name: "Petra",
    paternalLastName: "Fermin",
    specialty: "Hematología",
    email: "petra@doctor.com",
    password: hashPass,
  },
  {
    name: "Quetzalli",
    paternalLastName: "Cortes",
    specialty: "Reumatología",
    email: "quetzalli@doctor.com",
    password: hashPass,
  },
  {
    name: "Regina",
    paternalLastName: "Ornelas",
    specialty: "Neumología",
    email: "regina@doctor.com",
    password: hashPass,
  },
  {
    name: "Sandra",
    paternalLastName: "Alvarez",
    specialty: "Medicina del deporte",
    email: "sandra@doctor.com",
    password: hashPass,
  },
  {
    name: "Tina",
    paternalLastName: "Cruz",
    specialty: "Neumología",
    email: "tina@doctor.com",
    password: hashPass,
  },
  {
    name: "Valeria",
    paternalLastName: "Antonio",
    specialty: "Nefrología",
    email: "valeria@doctor.com",
    password: hashPass,
  },
  {
    name: "Wanda",
    paternalLastName: "Hernandez",
    specialty: "Toxicología",
    email: "wanda@doctor.com",
    password: hashPass,
  },
  {
    name: "Ximena",
    paternalLastName: "Valenzuela",
    specialty: "Cardiología",
    email: "ximena@doctor.com",
    password: hashPass,
  },
  {
    name: "Yaretzi",
    paternalLastName: "Sanchez",
    specialty: "Endocrinología",
    email: "yaretzi@doctor.com",
    password: hashPass,
  },
  {
    name: "Zita",
    paternalLastName: "Aguilar",
    specialty: "Medicina forense",
    email: "zita@doctor.com",
    password: hashPass,
  }
];

Doctor.collection.drop();

Doctor.create(doctors)
  .then(elements => {
    console.log(`Created ${elements.length} doctors`);
    mongoose.connection.close();
  })
  .catch(err => console.log("error ", err));
