import express from "express";
import mongoose from "mongoose";
import MainRouter from "./routes/MainRouter.js";

const app = express();
const port = 3000;

app.use(express.json());

const uri =
  "mongodb+srv://ilappy666:KFZymiP1OWKLppB1@w0v.wqet5le.mongodb.net/?retryWrites=true&w=majority&appName=W0V";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

mongoose.connect(uri, clientOptions).then(() => console.log("Connected to DB"));

app.use("/", MainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
