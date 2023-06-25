const express = require('express');
const cors = require('cors');
const port = 5000;
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();


// Connexion à la db
connectDB();
const app = express();

// Middleware qui permet de traiter les données de la request "req"
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/tasks", require("./routes/tasks.routes"));
app.use("/users", require("./routes/users.routes"));

// http://l0ocalhost:5000/tasks => routes que t'a défini
// Lancement du server
app.listen(port, () => console.log("Le serveur a démaré au port " + port))