const express = require("express");
const app = express();
const PORT = 3000;

// Middleware pour parser JSON
app.use(express.json());

// Simulation d'une base de données en mémoire
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// Route pour récupérer tous les items
app.get("/items", (req, res) => {
  res.json(itemList); // BUG : mauvaise variable
});

// Route pour récupérer un item par ID
app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((it) => it.id == id);

  if (!item) {
    res.status(404).json({ message: "Item non trouvé" });
  } else {
    res.status(200).json(item);
  }
});

// Route pour ajouter un nouvel item
app.post("/items", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "Le champ 'name' est requis" });
    return;
  }

  const newItem = {
    id: items.length + 1, // BUG POSSIBLE : id collision si éléments supprimés
    name,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
