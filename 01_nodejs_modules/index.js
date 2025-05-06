import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let html = "<p>Bienvenu a la page statique de expressJS</p>";
  res.send(html);
  // gestion de ce que fait localhost:3000/
});

app.get("/Poisson", (req, res) => {
  let html = "<div>Bienvenu a la page " + req.url + " de expressJS</div>";
  res.send(html);
  // gestion de ce que fait localhost:3000/poisson
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
