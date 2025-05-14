import express from "express";
import CharacterRouter from "./characterRoutes/CharacterRouter.js";

const MainRouter = express.Router();

MainRouter.use("/character", CharacterRouter);

export default MainRouter;
