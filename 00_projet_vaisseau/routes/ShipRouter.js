// route -> fct du controller
import express from "express";
import ShipController from "../controller/ShipController.js";

const ShipRouter = express.Router();

ShipRouter.get("/", ShipController.getAll);
ShipRouter.get("/:characterId", ShipController.getById);

export default ShipRouter;
