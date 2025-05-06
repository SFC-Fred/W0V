import express from "express";
import characterController from "./character/characterController.js";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  let html = "<p>Bienvenu dans l app gestion personnage</p>";
  res.send(html);
});

app.get("/characters", (req, res) => {
  let html = "<p>Vous avez demander la liste des personnages :</p>";
  let chars = characterController.list();

  res.send(chars);
});

app.post("/character", (req, res) => {
  let err = characterController.update(req.body);

  if (err) {
    res.status(500).send("Erreur de la sauvegarde");
  } else {
    res.status(200).send("GG!");
  }
});

app.get("/character/:id", (req, res) => {
  let html = "<p>Vous avez demander la liste des personnages :</p>";
  let char = characterController.get(req.params.id);

  res.send(char);
});

app.post("/character/:id", (req, res) => {
  let html = "<p>Vous avez demander la liste des personnages :</p>";
  let char = characterController.update(req.body);

  res.send(char);
});

app.delete("/character/:id", (req, res) => {
  let html = "<p>Vous avez demander la liste des personnages :</p>";
  let char = characterController.delete(req.params.id);

  res.send(char);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
