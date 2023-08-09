const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const data = require("./data.json");

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
