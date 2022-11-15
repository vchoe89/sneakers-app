const express = require("express");
const app = express();
const PORT = 8800;
const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();
var cors = require("cors");

app.use(cors());

app.get("/trending", (req, res) => {
  sneaks.getMostPopular(6, function (err, products) {
    res.send(products);
  });
});

app.listen(PORT, () => console.log(`server started on ${PORT}`));
