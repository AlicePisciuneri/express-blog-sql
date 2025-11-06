const express = require("express");
const app = express();
const port = 3000;

// Connessione al database
const db = require("./config/db");

// Import delle rotte

const postRoutes = require("./routes/postRoutes");
app.use("/posts", postRoutes);

// Middleware per leggere JSON
app.use(express.json());

// Uso delle rotte
app.use("/posts", postRoutes);

// Rotta di benvenuto
app.get("/", (req, res) => {
  res.send("Benvenuto nel mio blog");
});

// Avvio server
app.listen(port, () => {
  console.log(` Server acceso su http://localhost:${port}`);
});

