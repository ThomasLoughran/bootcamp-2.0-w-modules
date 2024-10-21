import { Express } from "express";
import chickens from "../data/chickens.json";
import { Chicken } from "../chickenSummary";
import omit from "lodash.omit";

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
    res.send(
      myChickens.map((chicken) => omit(chicken, ["about", "gender", "age"]))
    );
  });

  app.get(`${BASE_URL}/chickens/:id`, async (req, res) => {
    const { id } = req.params;
    const chicken = (chickens as Chicken[]).find(
      (chicken) => chicken.id === +id
    );

    if (chicken === undefined) {
      res.sendStatus(404);
    } else {
      res.send(chicken);
    }
  });
};
