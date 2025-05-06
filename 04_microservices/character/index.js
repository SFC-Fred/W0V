import express from "express";
import characterRouter from "./Controller/characterRouter.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/character", characterRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
