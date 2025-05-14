import axios from "axios";
import express from "express";
import characterController from "./characterController.js";
const characterRouter = express.Router();
const SHOP_PATH = "http://localhost:3001";

characterRouter.post("/sellItem", (request, response) => {});

characterRouter.post("/buyItem", async (request, response) => {
  let boba = characterController.get();
  // idempotent? -> non
  // sideEffects? -> oui
  //    se1: acheter un item réduit la qté que possède le shop
  // demander au shop le prix de l'item
  // GET /shop/item/:id -> l'item qu'on regarde
  let itemRequest = await axios.get(SHOP_PATH + "/shop/items");
  let itemFromShop = itemRequest?.data;
  if (!itemFromShop) {
    response.status(500).send("Internal error");
    return;
  }

  let chosenItem = boba.buyItem(itemFromShop);
  if (!chosenItem) {
    response.status(400).send("Cant affort the item");
    return;
  }

  response.status(200).send(JSON.stringify(chosenItem));
  //let item = await axios.get("PATH");

  // Envoyer une request a un shop
  // Ajouter un item dans mon inventaire
});

export default characterRouter;
