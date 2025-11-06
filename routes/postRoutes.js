const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");






//Rotte CRUD complete

// index → GET tutti i post (filtro lo aggiungo dopo)
router.get("/", postController.index);

// show → GET singolo post
//router.get("/:id", postController.show);

// store → POST nuovo post
//router.post("/", postController.store);

// update → PUT modifica completa
//router.put("/:id", postController.update);

// modify → PATCH modifica parziale
//router.patch("/:id", postController.modify);

//destroy → DELETE elimina post
router.delete("/:id", postController.destroy);


module.exports = router;

