// CONFIG
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const app = express();

const connectDB = require("./config/db");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//CONNECTION
connectDB();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "m3di4PP",
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 * 1000
    })
  })
);

// ROUTES
// app.use("/", require("./routes/index"));

app.all("*", (req, res, next) => {
  res.render("error");
});

// LISTEN
app.listen(3000, () => console.log(`Servidor listo en el puerto 3000`));
