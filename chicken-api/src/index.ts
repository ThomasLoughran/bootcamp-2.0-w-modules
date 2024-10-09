import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { addChickensEndpoint } from "./endpoints/chicken";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

addChickensEndpoint(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
