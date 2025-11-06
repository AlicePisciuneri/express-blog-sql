const post = require("../data/post").default;

// GET /posts → tutti i post (con filtro opzionale per tags)
const index = (req, res) => {
  let filtraPost = post;
  if (req.query.tags) {
    filtraPost = post.filter((postEl) => postEl.tags.includes(req.query.tags));
  }
  res.json(filtraPost);
};

// GET /posts/:id → singolo post
const show = (req, res) => {
  const { id } = req.params;
  const postEl = post.find((singlePost) => singlePost.id === parseInt(id));

  if (!postEl) {
    return res.status(404).json({
      error: "not found",
      message: "resource not found",
    });
  }

  res.json(postEl);
};

// POST /posts → crea nuovo post
const store = (req, res) => {
  const newPostId = post[post.length - 1].id + 1;
  const { titolo, contenuto, immagine, tags } = req.body;

  const newPost = {
    id: newPostId,
    titolo,
    contenuto,
    immagine,
    tags,
  };

  post.push(newPost);
  res.status(201).json(newPost);
};

// PUT /posts/:id → modifica completa
const update = (req, res) => {
  const { id } = req.params;
  const postEl = post.find((p) => p.id === parseInt(id));

  if (!postEl) {
    return res.status(404).json({
      error: "not found",
      message: "resource not found",
    });
  }

  const { titolo, contenuto, immagine, tags } = req.body;
  postEl.titolo = titolo;
  postEl.contenuto = contenuto;
  postEl.immagine = immagine;
  postEl.tags = tags;

  res.json(postEl);
};

// PATCH /posts/:id → modifica 
const modify = (req, res) => {
  const { id } = req.params;
  const postEl = post.find((p) => p.id === parseInt(id));

  if (!postEl) {
    return res.status(404).json({
      error: "not found",
      message: "resource not found",
    });
  }

  // aggiorna solo i campi passati nel body
  Object.assign(postEl, req.body);

  res.json(postEl);
};

// DELETE /posts/:id → elimina post
const destroy = (req, res) => {
  const { id } = req.params;
  const postEl = post.find((p) => p.id === parseInt(id));

  if (!postEl) {
    return res.status(404).json({
      error: "not found",
      message: "resource not found",
    });
  }

  post.splice(post.indexOf(postEl), 1);
  res.sendStatus(204); // nessun contenuto
};

module.exports = { index, show, store, update, modify, destroy };
