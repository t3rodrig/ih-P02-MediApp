// CONFIG
require("dotenv").config();
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const session = require("express-session");
const mongoose = require("mongoose");
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
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(__dirname + "/views/partials");

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
const index = require("./routes/index.route");
app.use("/", index);

app.all("*", (req, res, next) => {
  res.render("/");
});

// LISTEN
app.listen(3000, () => console.log(`Servidor listo en el puerto 3000`));

module.exports = app;
