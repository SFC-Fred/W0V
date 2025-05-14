import express from "express";
import ShipController from "../controller/ShipController.js";

const ShipRouter = express.Router();

ShipRouter.get("/", ShipController.getAll);
ShipRouter.get("/:shipId", ShipController.getById);

// TODO : you have to implements the routes to use the ships

export default ShipRouter;
