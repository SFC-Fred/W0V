import express from "express";
const shopRouter = express.Router();

shopRouter.get("/items", (request, response) => {
  const items = [
    { id: 1, cost: 10 },
    { id: 2, cost: 20 },
    { id: 3, cost: 30 },
  ];
  response.status(200).send(items);
});

export default shopRouter;
