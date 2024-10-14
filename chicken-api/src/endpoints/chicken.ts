import { Express } from "express";
import chickens from "../data/chickens.json";
import { Chicken } from "../chickenSummary";

type ChickensRequest = {
  limit?: number;
  skip?: number;
};

const BASE_URL = "/api/v1";

export const addChickensEndpoint = (app: Express) => {
  app.get(`${BASE_URL}/chickens`, async (req, res) => {
    const { limit = 10, skip = 0 } = req.query as ChickensRequest;
    console.log({ limit, skip });
    const myChickens: Chicken[] = (chickens as Chicken[]).slice(
      +skip,
      +limit + +skip
    );
    res.send(myChickens);
  });
};
