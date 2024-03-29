import express from "express";
import { translate } from "./translate.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send(await translate());
});

app.get("/:target", async (req, res) => {
  res.send(await translate(req.params.target));
});

const PORT = process.env.PORT || 3000;
const init = async () => {
  app.listen(PORT, () => {
    console.log(`Now Listening on port ${PORT}`);
  });
};

init();
