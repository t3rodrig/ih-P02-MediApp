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
    address:   {
      streetAddress: "Calle 123",
      borough: "Venustiano Carranza",
      city: "CDMX",
    }
  },
  {
    name: "Barbara",
    paternalLastName: "Martinez",
    specialty: "Neumología",
    email: "barbara@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX",
    }
  },
  {
    name: "Cassandra",
    paternalLastName: "Lopez",
    specialty: "Nefrología",
    email: "cassandra@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Azcapotzalco",
      city: "CDMX",
    }
  },
  {
    name: "Daryna",
    paternalLastName: "Sanchez",
    specialty: "Urología",
    email: "daryna@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Tláhuac",
      city: "CDMX",
    }
  },
  {
    name: "Elyssa",
    paternalLastName: "Huerta",
    specialty: "Traumatología",
    email: "elyssa@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Coyoacán",
      city: "CDMX",
    }
  },
  {
    name: "Felicia",
    paternalLastName: "Contreras",
    specialty: "Oncología",
    email: "felicia@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Benito Juárez",
      city: "CDMX",
    }
  },
  {
    name: "Gloria",
    paternalLastName: "Lopez",
    specialty: "Cardiología",
    email: "gloria@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Álvaro Obregón",
      city: "CDMX",
    }
  },
  {
    name: "Helena",
    paternalLastName: "Lopez",
    specialty: "Hematología",
    email: "helena@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX",
    }
  },
  {
    name: "Isadora",
    paternalLastName: "Camargo",
    specialty: "Nutriología",
    email: "isadora@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Gustavo A. Madero",
      city: "CDMX",
    }
  },
  {
    name: "Julia",
    paternalLastName: "Jimenez",
    specialty: "Medicina interna",
    email: "julia@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Cuajimalpa",
      city: "CDMX",
    }
  },
  {
    name: "Katya",
    paternalLastName: "Ornelas",
    specialty: "Neumología",
    email: "katya@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Azcapotzalco",
      city: "CDMX",
    }
  },
  {
    name: "Lisa",
    paternalLastName: "Martin",
    specialty: "Neurología",
    email: "lisa@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Cuajimalpa",
      city: "CDMX",
    }
  },
  {
    name: "Maya",
    paternalLastName: "Antonio",
    specialty: "Nefrología",
    email: "maya@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX",
    }
  },
  {
    name: "Nadia",
    paternalLastName: "Valenzuela",
    specialty: "Cardiología",
    email: "nadia@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Venustiano Carranza",
      city: "CDMX",
    }
  },
  {
    name: "Olivia",
    paternalLastName: "Dominguez",
    specialty: "Alergología",
    email: "olivia@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Venustiano Carranza",
      city: "CDMX",
    }
  },
  {
    name: "Petra",
    paternalLastName: "Guzman",
    specialty: "Gastroenterología",
    email: "petra@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Tláhuac",
      city: "CDMX",
    }
  },
  {
    name: "Quetzalli",
    paternalLastName: "Briseño",
    specialty: "Medicina familiar",
    email: "quetzalli@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX",
    }
  },
  {
    name: "Regina",
    paternalLastName: "Torres",
    specialty: "Otorrinolaringología",
    email: "regina@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Benito Juárez",
      city: "CDMX",
    }
  },
  {
    name: "Sandra",
    paternalLastName: "Morales",
    specialty: "Traumatología",
    email: "sandra@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Miguel Hidalgo",
      city: "CDMX",
    }
  },
  {
    name: "Tina",
    paternalLastName: "Jimenez",
    specialty: "Gastroenterología",
    email: "tina@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Coyoacán",
      city: "CDMX",
    }
  },
  {
    name: "Valeria",
    paternalLastName: "Esparza",
    specialty: "Cardiología",
    email: "valeria@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Azcapotzalco",
      city: "CDMX",
    }
  },
  {
    name: "Wanda",
    paternalLastName: "Aguilar",
    specialty: "Medicina intensiva",
    email: "wanda@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX",
    }
  },
  {
    name: "Ximena",
    paternalLastName: "Hernandez",
    specialty: "Reumatología",
    email: "ximena@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Álvaro Obregón",
      city: "CDMX",
    }
  },
  {
    name: "Yaretzi",
    paternalLastName: "Dominguez",
    specialty: "Oncología",
    email: "yaretzi@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Coyoacán",
      city: "CDMX",
    }
  },
  {
    name: "Zita",
    paternalLastName: "Valenzuela",
    specialty: "Medicina familiar",
    email: "zita@doctor.com",
    password: hashPass,
    address:   {
      streetAddress: "Calle 123",
      borough: "Coyoacán",
      city: "CDMX",
    }
  }
 ];

Doctor.collection.drop();

Doctor.create(doctors)
  .then(elements => {
    console.log(`Created ${elements.length} doctors`);
    mongoose.connection.close();
  })
  .catch(err => console.log("error ", err));
