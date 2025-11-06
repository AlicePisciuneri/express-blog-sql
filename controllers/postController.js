//importo connessione al database

const db = require("../config/db");

//funzione che restituisce tutti i post

function index(req, res) {
    const sql = "SELECT * FROM posts";

    //eseguo la query

    db.query(sql, (err, results) => {
        if (err) {
            console.error("errore nella query:", err);
            res.status(500).json({ error: "errore nel server" });
            return;
        }
        //restituisco o risultati

        res.json(results);
    });
}
module.exports = { index }; //esporto la funzione per usarla altrove
