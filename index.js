const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const data = require("./data.json");

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedData = data.find((n) => n.id === id);

  if (selectedData) {
    res.send(selectedData);
  } else {
    res.status(404).send("data not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
