require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Doctor = require("../models/Doctor");

mongoose.connect(process.env.URL_DB);

const salt = bcrypt.genSaltSync(10);
const hashPass = bcrypt.hashSync(process.env.DUMMY_PASS, salt);

const doctors = [
  {
    "name": "Abril",
    "paternalLastName": "Garza",
    "specialty": "Medicina forense",
    "email": "abril@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Ada",
    "paternalLastName": "Martinez",
    "specialty": "Neumología",
    "email": "ada@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Iztapalapa",
      "city": "CDMX"
    }
  },
  {
    "name": "Adriana",
    "paternalLastName": "Lopez",
    "specialty": "Nefrología",
    "email": "adriana@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Azcapotzalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Alejandra",
    "paternalLastName": "Sanchez",
    "specialty": "Urología",
    "email": "alejandra@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tláhuac",
      "city": "CDMX"
    }
  },
  {
    "name": "Alexa",
    "paternalLastName": "Huerta",
    "specialty": "Traumatología",
    "email": "alexa@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Coyoacán",
      "city": "CDMX"
    }
  },
  {
    "name": "Alondra",
    "paternalLastName": "Contreras",
    "specialty": "Oncología",
    "email": "alondra@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Benito Juárez",
      "city": "CDMX"
    }
  },
  {
    "name": "Ana",
    "paternalLastName": "Lopez",
    "specialty": "Cardiología",
    "email": "ana@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Álvaro Obregón",
      "city": "CDMX"
    }
  },
  {
    "name": "Anahi",
    "paternalLastName": "Lopez",
    "specialty": "Hematología",
    "email": "anahi@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Iztapalapa",
      "city": "CDMX"
    }
  },
  {
    "name": "Andrea",
    "paternalLastName": "Camargo",
    "specialty": "Nutriología",
    "email": "andrea@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Gustavo A. Madero",
      "city": "CDMX"
    }
  },
  {
    "name": "Arely",
    "paternalLastName": "Jimenez",
    "specialty": "Medicina interna",
    "email": "arely@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Cuajimalpa",
      "city": "CDMX"
    }
  },
  {
    "name": "Barbara",
    "paternalLastName": "Ornelas",
    "specialty": "Neumología",
    "email": "barbara@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Azcapotzalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Berenice",
    "paternalLastName": "Martin",
    "specialty": "Neurología",
    "email": "berenice@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Cuajimalpa",
      "city": "CDMX"
    }
  },
  {
    "name": "Brenda",
    "paternalLastName": "Antonio",
    "specialty": "Nefrología",
    "email": "brenda@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Iztapalapa",
      "city": "CDMX"
    }
  },
  {
    "name": "Camila",
    "paternalLastName": "Valenzuela",
    "specialty": "Cardiología",
    "email": "camila@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Carolina",
    "paternalLastName": "Dominguez",
    "specialty": "Alergología",
    "email": "carolina@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Cassandra",
    "paternalLastName": "Guzman",
    "specialty": "Gastroenterología",
    "email": "cassandra@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tláhuac",
      "city": "CDMX"
    }
  },
  {
    "name": "Cecilia",
    "paternalLastName": "Briseño",
    "specialty": "Medicina familiar",
    "email": "cecilia@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Cuauhtémoc",
      "city": "CDMX"
    }
  },
  {
    "name": "Claudia",
    "paternalLastName": "Torres",
    "specialty": "Otorrinolaringología",
    "email": "claudia@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Benito Juárez",
      "city": "CDMX"
    }
  },
  {
    "name": "Dafne",
    "paternalLastName": "Morales",
    "specialty": "Traumatología",
    "email": "dafne@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Miguel Hidalgo",
      "city": "CDMX"
    }
  },
  {
    "name": "Daniela",
    "paternalLastName": "Jimenez",
    "specialty": "Gastroenterología",
    "email": "daniela@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Coyoacán",
      "city": "CDMX"
    }
  },
  {
    "name": "Daryna",
    "paternalLastName": "Esparza",
    "specialty": "Cardiología",
    "email": "daryna@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Azcapotzalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Denisse",
    "paternalLastName": "Aguilar",
    "specialty": "Medicina intensiva",
    "email": "denisse@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Iztapalapa",
      "city": "CDMX"
    }
  },
  {
    "name": "Diana",
    "paternalLastName": "Hernandez",
    "specialty": "Reumatología",
    "email": "diana@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Álvaro Obregón",
      "city": "CDMX"
    }
  },
  {
    "name": "Dulce",
    "paternalLastName": "Dominguez",
    "specialty": "Oncología",
    "email": "dulce@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Coyoacán",
      "city": "CDMX"
    }
  },
  {
    "name": "Elena",
    "paternalLastName": "Valenzuela",
    "specialty": "Medicina familiar",
    "email": "elena@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Coyoacán",
      "city": "CDMX"
    }
  },
  {
    "name": "Elizabeth",
    "paternalLastName": "Valenzuela",
    "specialty": "Reumatología",
    "email": "elizabeth@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tláhuac",
      "city": "CDMX"
    }
  },
  {
    "name": "Elyssa",
    "paternalLastName": "Pichardo",
    "specialty": "Medicina familiar",
    "email": "elyssa@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Erika",
    "paternalLastName": "Lopez",
    "specialty": "Neumología",
    "email": "erika@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Milpa Alta",
      "city": "CDMX"
    }
  },
  {
    "name": "Esmeralda",
    "paternalLastName": "Andrade",
    "specialty": "Neurología",
    "email": "esmeralda@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Azcapotzalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Estefania",
    "paternalLastName": "Martinez",
    "specialty": "Hematología",
    "email": "estefania@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tlalpan",
      "city": "CDMX"
    }
  },
  {
    "name": "Evelyn",
    "paternalLastName": "Cruz",
    "specialty": "Oftalmología",
    "email": "evelyn@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Magdalena Contreras",
      "city": "CDMX"
    }
  },
  {
    "name": "Felicia",
    "paternalLastName": "Valenzuela",
    "specialty": "Oftalmología",
    "email": "felicia@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tláhuac",
      "city": "CDMX"
    }
  },
  {
    "name": "Fernanda",
    "paternalLastName": "Aguilar",
    "specialty": "Toxicología",
    "email": "fernanda@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Iztapalapa",
      "city": "CDMX"
    }
  },
  {
    "name": "Flor",
    "paternalLastName": "Valenzuela",
    "specialty": "Medicina del deporte",
    "email": "flor@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Xochimilco",
      "city": "CDMX"
    }
  },
  {
    "name": "Gabriela",
    "paternalLastName": "Dominguez",
    "specialty": "Dermatología",
    "email": "gabriela@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Miguel Hidalgo",
      "city": "CDMX"
    }
  },
  {
    "name": "Gloria",
    "paternalLastName": "Briseño",
    "specialty": "Urología",
    "email": "gloria@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Magdalena Contreras",
      "city": "CDMX"
    }
  },
  {
    "name": "Guadalupe",
    "paternalLastName": "Hernandez",
    "specialty": "Hematología",
    "email": "guadalupe@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tlalpan",
      "city": "CDMX"
    }
  },
  {
    "name": "Helena",
    "paternalLastName": "Dominguez",
    "specialty": "Traumatología",
    "email": "helena@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Irma",
    "paternalLastName": "Dominguez",
    "specialty": "Angiología",
    "email": "irma@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Isadora",
    "paternalLastName": "Antonio",
    "specialty": "Infectología",
    "email": "isadora@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Coyoacán",
      "city": "CDMX"
    }
  },
  {
    "name": "Itzel",
    "paternalLastName": "Montiel",
    "specialty": "Urología",
    "email": "itzel@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Gustavo A. Madero",
      "city": "CDMX"
    }
  },
  {
    "name": "Jazmin",
    "paternalLastName": "Cortes",
    "specialty": "Nutriología",
    "email": "jazmin@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Coyoacán",
      "city": "CDMX"
    }
  },
  {
    "name": "Jennifer",
    "paternalLastName": "Huerta",
    "specialty": "Medicina forense",
    "email": "jennifer@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tlalpan",
      "city": "CDMX"
    }
  },
  {
    "name": "Jessica",
    "paternalLastName": "Montiel",
    "specialty": "Anestesiología",
    "email": "jessica@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Álvaro Obregón",
      "city": "CDMX"
    }
  },
  {
    "name": "Julia",
    "paternalLastName": "Espinosa",
    "specialty": "Urología",
    "email": "julia@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Milpa Alta",
      "city": "CDMX"
    }
  },
  {
    "name": "Karen",
    "paternalLastName": "Cruz",
    "specialty": "Traumatología",
    "email": "karen@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Cuauhtémoc",
      "city": "CDMX"
    }
  },
  {
    "name": "Karina",
    "paternalLastName": "Pichardo",
    "specialty": "Medicina intensiva",
    "email": "karina@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Milpa Alta",
      "city": "CDMX"
    }
  },
  {
    "name": "Karla",
    "paternalLastName": "Hernandez",
    "specialty": "Oftalmología",
    "email": "karla@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Azcapotzalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Katya",
    "paternalLastName": "Ornelas",
    "specialty": "Medicina intensiva",
    "email": "katya@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Iztapalapa",
      "city": "CDMX"
    }
  },
  {
    "name": "Kimberly",
    "paternalLastName": "Antonio",
    "specialty": "Infectología",
    "email": "kimberly@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Azcapotzalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Laura",
    "paternalLastName": "Hernandez",
    "specialty": "Oftalmología",
    "email": "laura@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Álvaro Obregón",
      "city": "CDMX"
    }
  },
  {
    "name": "Liliana",
    "paternalLastName": "Cortes",
    "specialty": "Neurología",
    "email": "liliana@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Benito Juárez",
      "city": "CDMX"
    }
  },
  {
    "name": "Lisa",
    "paternalLastName": "Briseño",
    "specialty": "Urología",
    "email": "lisa@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Cuauhtémoc",
      "city": "CDMX"
    }
  },
  {
    "name": "Lizbeth",
    "paternalLastName": "Valenzuela",
    "specialty": "Hematología",
    "email": "lizbeth@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Gustavo A. Madero",
      "city": "CDMX"
    }
  },
  {
    "name": "Lizeth",
    "paternalLastName": "Huerta",
    "specialty": "Medicina intensiva",
    "email": "lizeth@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Azcapotzalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Lupita",
    "paternalLastName": "Lima",
    "specialty": "Urología",
    "email": "lupita@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Gustavo A. Madero",
      "city": "CDMX"
    }
  },
  {
    "name": "Margarita",
    "paternalLastName": "Silva",
    "specialty": "Geriatría",
    "email": "margarita@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tláhuac",
      "city": "CDMX"
    }
  },
  {
    "name": "Maria",
    "paternalLastName": "Fermin",
    "specialty": "Anestesiología",
    "email": "maria@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Iztapalapa",
      "city": "CDMX"
    }
  },
  {
    "name": "Mariana",
    "paternalLastName": "Montiel",
    "specialty": "Nutriología",
    "email": "mariana@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Iztapalapa",
      "city": "CDMX"
    }
  },
  {
    "name": "Maribel",
    "paternalLastName": "Torres",
    "specialty": "Medicina familiar",
    "email": "maribel@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Magdalena Contreras",
      "city": "CDMX"
    }
  },
  {
    "name": "Marisol",
    "paternalLastName": "Pichardo",
    "specialty": "Gastroenterología",
    "email": "marisol@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Cuajimalpa",
      "city": "CDMX"
    }
  },
  {
    "name": "Marlene",
    "paternalLastName": "Altamirano",
    "specialty": "Alergología",
    "email": "marlene@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Iztacalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Martha",
    "paternalLastName": "Dominguez",
    "specialty": "Medicina intensiva",
    "email": "martha@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tláhuac",
      "city": "CDMX"
    }
  },
  {
    "name": "Maya",
    "paternalLastName": "Morales",
    "specialty": "Angiología",
    "email": "maya@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Melissa",
    "paternalLastName": "Torres",
    "specialty": "Medicina del deporte",
    "email": "melissa@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Álvaro Obregón",
      "city": "CDMX"
    }
  },
  {
    "name": "Michelle",
    "paternalLastName": "Hernandez",
    "specialty": "Gastroenterología",
    "email": "michelle@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tlalpan",
      "city": "CDMX"
    }
  },
  {
    "name": "Miriam",
    "paternalLastName": "Valenzuela",
    "specialty": "Reumatología",
    "email": "miriam@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Nadia",
    "paternalLastName": "Ornelas",
    "specialty": "Medicina forense",
    "email": "nadia@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Azcapotzalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Nancy",
    "paternalLastName": "Dominguez",
    "specialty": "Nutriología",
    "email": "nancy@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Iztapalapa",
      "city": "CDMX"
    }
  },
  {
    "name": "Natali",
    "paternalLastName": "Huerta",
    "specialty": "Otorrinolaringología",
    "email": "natali@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tláhuac",
      "city": "CDMX"
    }
  },
  {
    "name": "Natalia",
    "paternalLastName": "Lopez",
    "specialty": "Medicina del deporte",
    "email": "natalia@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Miguel Hidalgo",
      "city": "CDMX"
    }
  },
  {
    "name": "Nelly",
    "paternalLastName": "Dominguez",
    "specialty": "Endocrinología",
    "email": "nelly@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Benito Juárez",
      "city": "CDMX"
    }
  },
  {
    "name": "Olivia",
    "paternalLastName": "Lima",
    "specialty": "Neumología",
    "email": "olivia@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Milpa Alta",
      "city": "CDMX"
    }
  },
  {
    "name": "Pamela",
    "paternalLastName": "Martinez",
    "specialty": "Dermatología",
    "email": "pamela@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Cuauhtémoc",
      "city": "CDMX"
    }
  },
  {
    "name": "Paola",
    "paternalLastName": "Pichardo",
    "specialty": "Medicina forense",
    "email": "paola@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Milpa Alta",
      "city": "CDMX"
    }
  },
  {
    "name": "Paula",
    "paternalLastName": "Huerta",
    "specialty": "Cardiología",
    "email": "paula@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Xochimilco",
      "city": "CDMX"
    }
  },
  {
    "name": "Paulina",
    "paternalLastName": "Andrade",
    "specialty": "Neurología",
    "email": "paulina@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Xochimilco",
      "city": "CDMX"
    }
  },
  {
    "name": "Petra",
    "paternalLastName": "Cortes",
    "specialty": "Infectología",
    "email": "petra@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Quetzalli",
    "paternalLastName": "Torres",
    "specialty": "Nutriología",
    "email": "quetzalli@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Milpa Alta",
      "city": "CDMX"
    }
  },
  {
    "name": "Regina",
    "paternalLastName": "Martinez",
    "specialty": "Gastroenterología",
    "email": "regina@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Renata",
    "paternalLastName": "Aguilar",
    "specialty": "Oftalmología",
    "email": "renata@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Cuajimalpa",
      "city": "CDMX"
    }
  },
  {
    "name": "Samantha",
    "paternalLastName": "Valenzuela",
    "specialty": "Dermatología",
    "email": "samantha@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Iztacalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Sandra",
    "paternalLastName": "Gonzalez",
    "specialty": "Angiología",
    "email": "sandra@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Magdalena Contreras",
      "city": "CDMX"
    }
  },
  {
    "name": "Sara",
    "paternalLastName": "Valenzuela",
    "specialty": "Nefrología",
    "email": "sara@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Miguel Hidalgo",
      "city": "CDMX"
    }
  },
  {
    "name": "Silvia",
    "paternalLastName": "Antonio",
    "specialty": "Ginecología y obstetricia",
    "email": "silvia@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Coyoacán",
      "city": "CDMX"
    }
  },
  {
    "name": "Sofia",
    "paternalLastName": "Jimenez",
    "specialty": "Oftalmología",
    "email": "sofia@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Gustavo A. Madero",
      "city": "CDMX"
    }
  },
  {
    "name": "Tania",
    "paternalLastName": "Briseño",
    "specialty": "Medicina familiar",
    "email": "tania@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Álvaro Obregón",
      "city": "CDMX"
    }
  },
  {
    "name": "Tina",
    "paternalLastName": "Altamirano",
    "specialty": "Medicina forense",
    "email": "tina@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Valeria",
    "paternalLastName": "Ornelas",
    "specialty": "Medicina física y rehabilitación",
    "email": "valeria@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Azcapotzalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Veronica",
    "paternalLastName": "Jimenez",
    "specialty": "Toxicología",
    "email": "veronica@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Xochimilco",
      "city": "CDMX"
    }
  },
  {
    "name": "Victoria",
    "paternalLastName": "Esparza",
    "specialty": "Cardiología",
    "email": "victoria@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Cuauhtémoc",
      "city": "CDMX"
    }
  },
  {
    "name": "Wanda",
    "paternalLastName": "Jimenez",
    "specialty": "Medicina intensiva",
    "email": "wanda@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Tláhuac",
      "city": "CDMX"
    }
  },
  {
    "name": "Ximena",
    "paternalLastName": "Esparza",
    "specialty": "Hematología",
    "email": "ximena@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Azcapotzalco",
      "city": "CDMX"
    }
  },
  {
    "name": "Yaretzi",
    "paternalLastName": "Morales",
    "specialty": "Traumatología",
    "email": "yaretzi@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Venustiano Carranza",
      "city": "CDMX"
    }
  },
  {
    "name": "Zita",
    "paternalLastName": "Cruz",
    "specialty": "Oncología",
    "email": "zita@doctor.com",
    "password": hashPass,
    "address": {
      "streetAddress": "Calle 123",
      "borough": "Cuauhtémoc",
      "city": "CDMX"
    }
  }
];

Doctor.collection.drop();

setTimeout(()=> {
  Doctor.create(doctors)
  .then(elements => {
    console.log(`Created ${elements.length} doctors`);
    mongoose.connection.close();
  })
  .catch(err => console.log("error ", err));
}, 3000);
