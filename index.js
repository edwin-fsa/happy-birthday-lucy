import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Happy Birthday!");
});

const PORT = process.env.PORT || 3000;
const init = async () => {
  app.listen(PORT, () => {
    console.log(`Now Listening on port ${PORT}`);
  });
};

init();
