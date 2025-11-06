// Importo  il pacchetto mysql2
const mysql = require("mysql2");

// Creo la connessione al database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "amleto82",
    database: "blog"
});

//Provo la connessione
db.connect((err) => {
    if (err) {
        console.log("Errore di connessione al database:", err);
    } else {
        console.log("Connessione al database riuscita!");
    }
});

// Esporto la connessione per poterla usare nel resto del progetto
module.exports = db;
