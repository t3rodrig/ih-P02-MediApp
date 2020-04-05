require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Doctor = require("../models/Doctor");

mongoose.connect(process.env.URL_DB);

const salt = bcrypt.genSaltSync(10);
const hashPass = bcrypt.hashSync(process.env.DUMMY_PASS, salt);

const doctors = [
  {
    firstName: "Abril",
    paternalLastName: "Garza",
    idCard: 1234,
    specialty: "Otorrinolaringología",
    email: "abril@doctor.com",
    password: hashPass,
    idCard: 295333,
    address: {
      streetAddress: "Calle 123",
      borough: "Venustiano Carranza",
      city: "CDMX"
    }
  },
  {
    firstName: "Ada",
    paternalLastName: "Martinez",
    specialty: "Traumatología",
    email: "ada@doctor.com",
    password: hashPass,
    idCard: 430905,
    address: {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX"
    }
  },
  {
    firstName: "Adriana",
    paternalLastName: "Lopez",
    specialty: "Reumatología",
    email: "adriana@doctor.com",
    password: hashPass,
    idCard: 883406,
    address: {
      streetAddress: "Calle 123",
      borough: "Azcapotzalco",
      city: "CDMX"
    }
  },
  {
    firstName: "Alejandra",
    paternalLastName: "Sanchez",
    specialty: "Urología",
    email: "alejandra@doctor.com",
    password: hashPass,
    idCard: 429676,
    address: {
      streetAddress: "Calle 123",
      borough: "Tláhuac",
      city: "CDMX"
    }
  },
  {
    firstName: "Alexa",
    paternalLastName: "Huerta",
    specialty: "Dermatología",
    email: "alexa@doctor.com",
    password: hashPass,
    idCard: 564737,
    address: {
      streetAddress: "Calle 123",
      borough: "Coyoacán",
      city: "CDMX"
    }
  },
  {
    firstName: "Alondra",
    paternalLastName: "Antonio",
    specialty: "Nefrología",
    email: "alondra@doctor.com",
    password: hashPass,
    idCard: 206858,
    address: {
      streetAddress: "Calle 123",
      borough: "Coyoacán",
      city: "CDMX"
    }
  },
  {
    firstName: "Ana",
    paternalLastName: "Aguilar",
    specialty: "Traumatología",
    email: "ana@doctor.com",
    password: hashPass,
    idCard: 580945,
    address: {
      streetAddress: "Calle 123",
      borough: "Miguel Hidalgo",
      city: "CDMX"
    }
  },
  {
    firstName: "Anahi",
    paternalLastName: "Huerta",
    specialty: "Traumatología",
    email: "anahi@doctor.com",
    password: hashPass,
    idCard: 628262,
    address: {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX"
    }
  },
  {
    firstName: "Andrea",
    paternalLastName: "Camargo",
    specialty: "Geriatría",
    email: "andrea@doctor.com",
    password: hashPass,
    idCard: 701807,
    address: {
      streetAddress: "Calle 123",
      borough: "Magdalena Contreras",
      city: "CDMX"
    }
  },
  {
    firstName: "Arely",
    paternalLastName: "Cortes",
    specialty: "Oncología",
    email: "arely@doctor.com",
    password: hashPass,
    idCard: 685887,
    address: {
      streetAddress: "Calle 123",
      borough: "Azcapotzalco",
      city: "CDMX"
    }
  },
  {
    firstName: "Barbara",
    paternalLastName: "Martin",
    specialty: "Urología",
    email: "barbara@doctor.com",
    password: hashPass,
    idCard: 197966,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuajimalpa",
      city: "CDMX"
    }
  },
  {
    firstName: "Berenice",
    paternalLastName: "Antonio",
    specialty: "Reumatología",
    email: "berenice@doctor.com",
    password: hashPass,
    idCard: 752247,
    address: {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX"
    }
  },
  {
    firstName: "Brenda",
    paternalLastName: "Valenzuela",
    specialty: "Dermatología",
    email: "brenda@doctor.com",
    password: hashPass,
    idCard: 871937,
    address: {
      streetAddress: "Calle 123",
      borough: "Venustiano Carranza",
      city: "CDMX"
    }
  },
  {
    firstName: "Camila",
    paternalLastName: "Dominguez",
    specialty: "Alergología",
    email: "camila@doctor.com",
    password: hashPass,
    idCard: 784380,
    address: {
      streetAddress: "Calle 123",
      borough: "Venustiano Carranza",
      city: "CDMX"
    }
  },
  {
    firstName: "Carolina",
    paternalLastName: "Guzman",
    specialty: "Geriatría",
    email: "carolina@doctor.com",
    password: hashPass,
    idCard: 887788,
    address: {
      streetAddress: "Calle 123",
      borough: "Tláhuac",
      city: "CDMX"
    }
  },
  {
    firstName: "Cassandra",
    paternalLastName: "Briseño",
    specialty: "Neurología",
    email: "cassandra@doctor.com",
    password: hashPass,
    idCard: 275994,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX"
    }
  },
  {
    firstName: "Cecilia",
    paternalLastName: "Torres",
    specialty: "Cardiología",
    email: "cecilia@doctor.com",
    password: hashPass,
    idCard: 299710,
    address: {
      streetAddress: "Calle 123",
      borough: "Tláhuac",
      city: "CDMX"
    }
  },
  {
    firstName: "Claudia",
    paternalLastName: "Lima",
    specialty: "Medicina interna",
    email: "claudia@doctor.com",
    password: hashPass,
    idCard: 283682,
    address: {
      streetAddress: "Calle 123",
      borough: "Gustavo A. Madero",
      city: "CDMX"
    }
  },
  {
    firstName: "Dafne",
    paternalLastName: "Camargo",
    specialty: "Gastroenterología",
    email: "dafne@doctor.com",
    password: hashPass,
    idCard: 368986,
    address: {
      streetAddress: "Calle 123",
      borough: "Coyoacán",
      city: "CDMX"
    }
  },
  {
    firstName: "Daniela",
    paternalLastName: "Alvarez",
    specialty: "Alergología",
    email: "daniela@doctor.com",
    password: hashPass,
    idCard: 332682,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Daryna",
    paternalLastName: "Guzman",
    specialty: "Medicina familiar",
    email: "daryna@doctor.com",
    password: hashPass,
    idCard: 907847,
    address: {
      streetAddress: "Calle 123",
      borough: "Álvaro Obregón",
      city: "CDMX"
    }
  },
  {
    firstName: "Denisse",
    paternalLastName: "Dominguez",
    specialty: "Dermatología",
    email: "denisse@doctor.com",
    password: hashPass,
    idCard: 913972,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Diana",
    paternalLastName: "Montiel",
    specialty: "Dermatología",
    email: "diana@doctor.com",
    password: hashPass,
    idCard: 501118,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Dulce",
    paternalLastName: "Morales",
    specialty: "Oncología",
    email: "dulce@doctor.com",
    password: hashPass,
    idCard: 821713,
    address: {
      streetAddress: "Calle 123",
      borough: "Tláhuac",
      city: "CDMX"
    }
  },
  {
    firstName: "Elena",
    paternalLastName: "Sanchez",
    specialty: "Nefrología",
    email: "elena@doctor.com",
    password: hashPass,
    idCard: 930643,
    address: {
      streetAddress: "Calle 123",
      borough: "Milpa Alta",
      city: "CDMX"
    }
  },
  {
    firstName: "Elizabeth",
    paternalLastName: "Andrade",
    specialty: "Urología",
    email: "elizabeth@doctor.com",
    password: hashPass,
    idCard: 274724,
    address: {
      streetAddress: "Calle 123",
      borough: "Azcapotzalco",
      city: "CDMX"
    }
  },
  {
    firstName: "Elyssa",
    paternalLastName: "Martinez",
    specialty: "Medicina interna",
    email: "elyssa@doctor.com",
    password: hashPass,
    idCard: 110052,
    address: {
      streetAddress: "Calle 123",
      borough: "Tlalpan",
      city: "CDMX"
    }
  },
  {
    firstName: "Erika",
    paternalLastName: "Cruz",
    specialty: "Medicina interna",
    email: "erika@doctor.com",
    password: hashPass,
    idCard: 162444,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Esmeralda",
    paternalLastName: "Morales",
    specialty: "Alergología",
    email: "esmeralda@doctor.com",
    password: hashPass,
    idCard: 878454,
    address: {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX"
    }
  },
  {
    firstName: "Estefania",
    paternalLastName: "Valenzuela",
    specialty: "Neumología",
    email: "estefania@doctor.com",
    password: hashPass,
    idCard: 866664,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Evelyn",
    paternalLastName: "Dominguez",
    specialty: "Endocrinología",
    email: "evelyn@doctor.com",
    password: hashPass,
    idCard: 608136,
    address: {
      streetAddress: "Calle 123",
      borough: "Miguel Hidalgo",
      city: "CDMX"
    }
  },
  {
    firstName: "Felicia",
    paternalLastName: "Briseño",
    specialty: "Medicina interna",
    email: "felicia@doctor.com",
    password: hashPass,
    idCard: 904829,
    address: {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX"
    }
  },
  {
    firstName: "Fernanda",
    paternalLastName: "Jimenez",
    specialty: "Oncología",
    email: "fernanda@doctor.com",
    password: hashPass,
    idCard: 959492,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX"
    }
  },
  {
    firstName: "Flor",
    paternalLastName: "Sanchez",
    specialty: "Traumatología",
    email: "flor@doctor.com",
    password: hashPass,
    idCard: 287368,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX"
    }
  },
  {
    firstName: "Gabriela",
    paternalLastName: "Briseño",
    specialty: "Otorrinolaringología",
    email: "gabriela@doctor.com",
    password: hashPass,
    idCard: 322175,
    address: {
      streetAddress: "Calle 123",
      borough: "Benito Juárez",
      city: "CDMX"
    }
  },
  {
    firstName: "Gloria",
    paternalLastName: "Lopez",
    specialty: "Dermatología",
    email: "gloria@doctor.com",
    password: hashPass,
    idCard: 495713,
    address: {
      streetAddress: "Calle 123",
      borough: "Tláhuac",
      city: "CDMX"
    }
  },
  {
    firstName: "Guadalupe",
    paternalLastName: "Espinosa",
    specialty: "Urología",
    email: "guadalupe@doctor.com",
    password: hashPass,
    idCard: 150484,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuajimalpa",
      city: "CDMX"
    }
  },
  {
    firstName: "Helena",
    paternalLastName: "Camargo",
    specialty: "Urología",
    email: "helena@doctor.com",
    password: hashPass,
    idCard: 671076,
    address: {
      streetAddress: "Calle 123",
      borough: "Magdalena Contreras",
      city: "CDMX"
    }
  },
  {
    firstName: "Irma",
    paternalLastName: "Silva",
    specialty: "Traumatología",
    email: "irma@doctor.com",
    password: hashPass,
    idCard: 117370,
    address: {
      streetAddress: "Calle 123",
      borough: "Tlalpan",
      city: "CDMX"
    }
  },
  {
    firstName: "Isadora",
    paternalLastName: "Montiel",
    specialty: "Angiología",
    email: "isadora@doctor.com",
    password: hashPass,
    idCard: 20334,
    address: {
      streetAddress: "Calle 123",
      borough: "Álvaro Obregón",
      city: "CDMX"
    }
  },
  {
    firstName: "Itzel",
    paternalLastName: "Espinosa",
    specialty: "Neumología",
    email: "itzel@doctor.com",
    password: hashPass,
    idCard: 825865,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuajimalpa",
      city: "CDMX"
    }
  },
  {
    firstName: "Jazmin",
    paternalLastName: "Dominguez",
    specialty: "Oncología",
    email: "jazmin@doctor.com",
    password: hashPass,
    idCard: 919384,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Jennifer",
    paternalLastName: "Martinez",
    specialty: "Medicina familiar",
    email: "jennifer@doctor.com",
    password: hashPass,
    idCard: 63571,
    address: {
      streetAddress: "Calle 123",
      borough: "Azcapotzalco",
      city: "CDMX"
    }
  },
  {
    firstName: "Jessica",
    paternalLastName: "Ornelas",
    specialty: "Pediatría",
    email: "jessica@doctor.com",
    password: hashPass,
    idCard: 687268,
    address: {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX"
    }
  },
  {
    firstName: "Julia",
    paternalLastName: "Antonio",
    specialty: "Nefrología",
    email: "julia@doctor.com",
    password: hashPass,
    idCard: 545167,
    address: {
      streetAddress: "Calle 123",
      borough: "Azcapotzalco",
      city: "CDMX"
    }
  },
  {
    firstName: "Karen",
    paternalLastName: "Hernandez",
    specialty: "Psiquiatría",
    email: "karen@doctor.com",
    password: hashPass,
    idCard: 378148,
    address: {
      streetAddress: "Calle 123",
      borough: "Álvaro Obregón",
      city: "CDMX"
    }
  },
  {
    firstName: "Karina",
    paternalLastName: "Cortes",
    specialty: "Urología",
    email: "karina@doctor.com",
    password: hashPass,
    idCard: 46680,
    address: {
      streetAddress: "Calle 123",
      borough: "Benito Juárez",
      city: "CDMX"
    }
  },
  {
    firstName: "Karla",
    paternalLastName: "Briseño",
    specialty: "Traumatología",
    email: "karla@doctor.com",
    password: hashPass,
    idCard: 192306,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX"
    }
  },
  {
    firstName: "Katya",
    paternalLastName: "Valenzuela",
    specialty: "Medicina interna",
    email: "katya@doctor.com",
    password: hashPass,
    idCard: 872685,
    address: {
      streetAddress: "Calle 123",
      borough: "Gustavo A. Madero",
      city: "CDMX"
    }
  },
  {
    firstName: "Kimberly",
    paternalLastName: "Huerta",
    specialty: "Pediatría",
    email: "kimberly@doctor.com",
    password: hashPass,
    idCard: 321231,
    address: {
      streetAddress: "Calle 123",
      borough: "Azcapotzalco",
      city: "CDMX"
    }
  },
  {
    firstName: "Laura",
    paternalLastName: "Lima",
    specialty: "Geriatría",
    email: "laura@doctor.com",
    password: hashPass,
    idCard: 622540,
    address: {
      streetAddress: "Calle 123",
      borough: "Venustiano Carranza",
      city: "CDMX"
    }
  },
  {
    firstName: "Liliana",
    paternalLastName: "Gonzalez",
    specialty: "Traumatología",
    email: "liliana@doctor.com",
    password: hashPass,
    idCard: 275385,
    address: {
      streetAddress: "Calle 123",
      borough: "Tláhuac",
      city: "CDMX"
    }
  },
  {
    firstName: "Lisa",
    paternalLastName: "Fermin",
    specialty: "Angiología",
    email: "lisa@doctor.com",
    password: hashPass,
    idCard: 664351,
    address: {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX"
    }
  },
  {
    firstName: "Lizbeth",
    paternalLastName: "Montiel",
    specialty: "Medicina familiar",
    email: "lizbeth@doctor.com",
    password: hashPass,
    idCard: 776371,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Lizeth",
    paternalLastName: "Montiel",
    specialty: "Medicina interna",
    email: "lizeth@doctor.com",
    password: hashPass,
    idCard: 263650,
    address: {
      streetAddress: "Calle 123",
      borough: "Tlalpan",
      city: "CDMX"
    }
  },
  {
    firstName: "Lupita",
    paternalLastName: "Fermin",
    specialty: "Endocrinología",
    email: "lupita@doctor.com",
    password: hashPass,
    idCard: 32608,
    address: {
      streetAddress: "Calle 123",
      borough: "Álvaro Obregón",
      city: "CDMX"
    }
  },
  {
    firstName: "Margarita",
    paternalLastName: "Aguilar",
    specialty: "Ginecología y obstetricia",
    email: "margarita@doctor.com",
    password: hashPass,
    idCard: 894226,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX"
    }
  },
  {
    firstName: "Maria",
    paternalLastName: "Torres",
    specialty: "Neurología",
    email: "maria@doctor.com",
    password: hashPass,
    idCard: 391798,
    address: {
      streetAddress: "Calle 123",
      borough: "Tláhuac",
      city: "CDMX"
    }
  },
  {
    firstName: "Mariana",
    paternalLastName: "Antonio",
    specialty: "Otorrinolaringología",
    email: "mariana@doctor.com",
    password: hashPass,
    idCard: 73677,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Maribel",
    paternalLastName: "Martin",
    specialty: "Alergología",
    email: "maribel@doctor.com",
    password: hashPass,
    idCard: 30925,
    address: {
      streetAddress: "Calle 123",
      borough: "Iztapalapa",
      city: "CDMX"
    }
  },
  {
    firstName: "Marisol",
    paternalLastName: "Espinosa",
    specialty: "Reumatología",
    email: "marisol@doctor.com",
    password: hashPass,
    idCard: 188185,
    address: {
      streetAddress: "Calle 123",
      borough: "Tlalpan",
      city: "CDMX"
    }
  },
  {
    firstName: "Marlene",
    paternalLastName: "Valenzuela",
    specialty: "Otorrinolaringología",
    email: "marlene@doctor.com",
    password: hashPass,
    idCard: 194992,
    address: {
      streetAddress: "Calle 123",
      borough: "Tlalpan",
      city: "CDMX"
    }
  },
  {
    firstName: "Martha",
    paternalLastName: "Silva",
    specialty: "Angiología",
    email: "martha@doctor.com",
    password: hashPass,
    idCard: 629387,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX"
    }
  },
  {
    firstName: "Maya",
    paternalLastName: "Hernandez",
    specialty: "Medicina interna",
    email: "maya@doctor.com",
    password: hashPass,
    idCard: 503053,
    address: {
      streetAddress: "Calle 123",
      borough: "Tláhuac",
      city: "CDMX"
    }
  },
  {
    firstName: "Melissa",
    paternalLastName: "Lopez",
    specialty: "Neumología",
    email: "melissa@doctor.com",
    password: hashPass,
    idCard: 479219,
    address: {
      streetAddress: "Calle 123",
      borough: "Miguel Hidalgo",
      city: "CDMX"
    }
  },
  {
    firstName: "Michelle",
    paternalLastName: "Dominguez",
    specialty: "Gastroenterología",
    email: "michelle@doctor.com",
    password: hashPass,
    idCard: 27555,
    address: {
      streetAddress: "Calle 123",
      borough: "Benito Juárez",
      city: "CDMX"
    }
  },
  {
    firstName: "Miriam",
    paternalLastName: "Lima",
    specialty: "Traumatología",
    email: "miriam@doctor.com",
    password: hashPass,
    idCard: 753292,
    address: {
      streetAddress: "Calle 123",
      borough: "Milpa Alta",
      city: "CDMX"
    }
  },
  {
    firstName: "Nadia",
    paternalLastName: "Martinez",
    specialty: "Endocrinología",
    email: "nadia@doctor.com",
    password: hashPass,
    idCard: 614437,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX"
    }
  },
  {
    firstName: "Nancy",
    paternalLastName: "Pichardo",
    specialty: "Otorrinolaringología",
    email: "nancy@doctor.com",
    password: hashPass,
    idCard: 66871,
    address: {
      streetAddress: "Calle 123",
      borough: "Milpa Alta",
      city: "CDMX"
    }
  },
  {
    firstName: "Natali",
    paternalLastName: "Huerta",
    specialty: "Dermatología",
    email: "natali@doctor.com",
    password: hashPass,
    idCard: 223322,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Natalia",
    paternalLastName: "Andrade",
    specialty: "Urología",
    email: "natalia@doctor.com",
    password: hashPass,
    idCard: 887550,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Nelly",
    paternalLastName: "Cortes",
    specialty: "Nefrología",
    email: "nelly@doctor.com",
    password: hashPass,
    idCard: 288856,
    address: {
      streetAddress: "Calle 123",
      borough: "Venustiano Carranza",
      city: "CDMX"
    }
  },
  {
    firstName: "Olivia",
    paternalLastName: "Torres",
    specialty: "Neumología",
    email: "olivia@doctor.com",
    password: hashPass,
    idCard: 977739,
    address: {
      streetAddress: "Calle 123",
      borough: "Milpa Alta",
      city: "CDMX"
    }
  },
  {
    firstName: "Pamela",
    paternalLastName: "Fermin",
    specialty: "Psiquiatría",
    email: "pamela@doctor.com",
    password: hashPass,
    idCard: 658963,
    address: {
      streetAddress: "Calle 123",
      borough: "Venustiano Carranza",
      city: "CDMX"
    }
  },
  {
    firstName: "Paola",
    paternalLastName: "Aguilar",
    specialty: "Endocrinología",
    email: "paola@doctor.com",
    password: hashPass,
    idCard: 903152,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Paula",
    paternalLastName: "Cruz",
    specialty: "Ginecología y obstetricia",
    email: "paula@doctor.com",
    password: hashPass,
    idCard: 293842,
    address: {
      streetAddress: "Calle 123",
      borough: "Iztacalco",
      city: "CDMX"
    }
  },
  {
    firstName: "Paulina",
    paternalLastName: "Antonio",
    specialty: "Traumatología",
    email: "paulina@doctor.com",
    password: hashPass,
    idCard: 770775,
    address: {
      streetAddress: "Calle 123",
      borough: "Magdalena Contreras",
      city: "CDMX"
    }
  },
  {
    firstName: "Petra",
    paternalLastName: "Valenzuela",
    specialty: "Reumatología",
    email: "petra@doctor.com",
    password: hashPass,
    idCard: 259656,
    address: {
      streetAddress: "Calle 123",
      borough: "Miguel Hidalgo",
      city: "CDMX"
    }
  },
  {
    firstName: "Quetzalli",
    paternalLastName: "Antonio",
    specialty: "Medicina familiar",
    email: "quetzalli@doctor.com",
    password: hashPass,
    idCard: 505237,
    address: {
      streetAddress: "Calle 123",
      borough: "Coyoacán",
      city: "CDMX"
    }
  },
  {
    firstName: "Regina",
    paternalLastName: "Jimenez",
    specialty: "Geriatría",
    email: "regina@doctor.com",
    password: hashPass,
    idCard: 65331,
    address: {
      streetAddress: "Calle 123",
      borough: "Benito Juárez",
      city: "CDMX"
    }
  },
  {
    firstName: "Renata",
    paternalLastName: "Montiel",
    specialty: "Traumatología",
    email: "renata@doctor.com",
    password: hashPass,
    idCard: 329191,
    address: {
      streetAddress: "Calle 123",
      borough: "Álvaro Obregón",
      city: "CDMX"
    }
  },
  {
    firstName: "Samantha",
    paternalLastName: "Altamirano",
    specialty: "Otorrinolaringología",
    email: "samantha@doctor.com",
    password: hashPass,
    idCard: 124616,
    address: {
      streetAddress: "Calle 123",
      borough: "Venustiano Carranza",
      city: "CDMX"
    }
  },
  {
    firstName: "Sandra",
    paternalLastName: "Ornelas",
    specialty: "Oncología",
    email: "sandra@doctor.com",
    password: hashPass,
    idCard: 428186,
    address: {
      streetAddress: "Calle 123",
      borough: "Azcapotzalco",
      city: "CDMX"
    }
  },
  {
    firstName: "Sara",
    paternalLastName: "Jimenez",
    specialty: "Pediatría",
    email: "sara@doctor.com",
    password: hashPass,
    idCard: 273744,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX"
    }
  },
  {
    firstName: "Silvia",
    paternalLastName: "Contreras",
    specialty: "Gastroenterología",
    email: "silvia@doctor.com",
    password: hashPass,
    idCard: 863770,
    address: {
      streetAddress: "Calle 123",
      borough: "Magdalena Contreras",
      city: "CDMX"
    }
  },
  {
    firstName: "Sofia",
    paternalLastName: "Valenzuela",
    specialty: "Neurología",
    email: "sofia@doctor.com",
    password: hashPass,
    idCard: 918483,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX"
    }
  },
  {
    firstName: "Tania",
    paternalLastName: "Jimenez",
    specialty: "Angiología",
    email: "tania@doctor.com",
    password: hashPass,
    idCard: 449963,
    address: {
      streetAddress: "Calle 123",
      borough: "Tláhuac",
      city: "CDMX"
    }
  },
  {
    firstName: "Tina",
    paternalLastName: "Sanchez",
    specialty: "Endocrinología",
    email: "tina@doctor.com",
    password: hashPass,
    idCard: 726819,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX"
    }
  },
  {
    firstName: "Valeria",
    paternalLastName: "Cruz",
    specialty: "Endocrinología",
    email: "valeria@doctor.com",
    password: hashPass,
    idCard: 506316,
    address: {
      streetAddress: "Calle 123",
      borough: "Álvaro Obregón",
      city: "CDMX"
    }
  },
  {
    firstName: "Veronica",
    paternalLastName: "Aguilar",
    specialty: "Oncología",
    email: "veronica@doctor.com",
    password: hashPass,
    idCard: 467013,
    address: {
      streetAddress: "Calle 123",
      borough: "Xochimilco",
      city: "CDMX"
    }
  },
  {
    firstName: "Victoria",
    paternalLastName: "Briseño",
    specialty: "Traumatología",
    email: "victoria@doctor.com",
    password: hashPass,
    idCard: 569100,
    address: {
      streetAddress: "Calle 123",
      borough: "Cuauhtémoc",
      city: "CDMX"
    }
  },
  {
    firstName: "Wanda",
    paternalLastName: "Esparza",
    specialty: "Neurología",
    email: "wanda@doctor.com",
    password: hashPass,
    idCard: 536533,
    address: {
      streetAddress: "Calle 123",
      borough: "Venustiano Carranza",
      city: "CDMX"
    }
  },
  {
    firstName: "Ximena",
    paternalLastName: "Camargo",
    specialty: "Nefrología",
    email: "ximena@doctor.com",
    password: hashPass,
    idCard: 933336,
    address: {
      streetAddress: "Calle 123",
      borough: "Álvaro Obregón",
      city: "CDMX"
    }
  },
  {
    firstName: "Yaretzi",
    paternalLastName: "Martinez",
    specialty: "Medicina familiar",
    email: "yaretzi@doctor.com",
    password: hashPass,
    idCard: 895874,
    address: {
      streetAddress: "Calle 123",
      borough: "Coyoacán",
      city: "CDMX"
    }
  },
  {
    firstName: "Zita",
    paternalLastName: "Esparza",
    specialty: "Nefrología",
    email: "zita@doctor.com",
    password: hashPass,
    idCard: 624478,
    address: {
      streetAddress: "Calle 123",
      borough: "Benito Juárez",
      city: "CDMX"
    }
  }
];

Doctor.collection.drop();

setTimeout(() => {
  Doctor.create(doctors)
    .then(elements => {
      console.log(`Created ${elements.length} doctors`);
      mongoose.connection.close();
    })
    .catch(err => console.log("error ", err));
}, 3000);
