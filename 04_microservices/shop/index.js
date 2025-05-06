import express from "express";
import shopRouter from "./Controller/shopRouter.js";

const app = express();
const port = 3001;

app.use(express.json());

app.use("/shop", shopRouter);

app.listen(port, () => {
  console.log(`Example app listening on ports ${port}`);
});
