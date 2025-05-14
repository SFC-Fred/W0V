import express from "express";
import ShipRouter from "./ShipRouter.js";

const MainRouter = express.Router();

MainRouter.use("/ships", ShipRouter);

export default MainRouter;
