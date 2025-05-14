// route -> fct du controller
import express from "express";
import CharacterController from "../../controller/CharacterController.js";

const CharacterRouter = express.Router();

CharacterRouter.get("/", CharacterController.getAll);
CharacterRouter.get("/:characterId", CharacterController.getById);
CharacterRouter.delete("/:characterId/delete", CharacterController.removeById);

CharacterRouter.post("/create", CharacterController.create);

export default CharacterRouter;
