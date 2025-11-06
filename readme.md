# 📰 Express Blog API — Milestone 1

### Obiettivo
Collegare l'app Express al database MySQL per rendere persistenti i dati del blog.

---

## Tecnologie utilizzate
- **Node.js** + **Express**
- **MySQL** (gestito tramite **MySQL Workbench**)
- **mysql2** come client per la connessione
- **VS Code** per lo sviluppo

---

## Milestone 1 — Connessione al Database
1. Importato il file `blog.sql` in MySQL Workbench  
2. Installato il pacchetto **mysql2** con:
   ```bash
   npm install mysql2

## Creato il file config/db.js con la logica di connessione:
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "la_tua_password",
  database: "blog"
});
db.connect((err) => {
  if (err) console.log("Errore:", err);
  else console.log("Connessione al database riuscita!");
});
module.exports = db;

## Importato il file in server.js:##
const db = require("./config/db");

## Avviato il server con:##  npm run dev
Risultato in console:
Connessione al database riuscita!
Server acceso su http://localhost:3000

### Milestone 2 — API Index
- Implementata rotta GET /posts
- Query SQL: SELECT * FROM posts
- Restituisce tutti i post in formato JSON
- Testata su **Postman**, risultati corretti !!!!!!!!!!!! NON CI CREDO!!!!!!!!!!!!!!!


