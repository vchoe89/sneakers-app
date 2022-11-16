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

//LUXURY BRANDS
app.get("/balenciaga", (req, res) => {
  sneaks.getProducts("balanciaga", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/chanel", (req, res) => {
  sneaks.getProducts("chanel", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/gucci", (req, res) => {
  sneaks.getProducts("gucci", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/dior", (req, res) => {
  sneaks.getProducts("dior", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/hermes", (req, res) => {
  sneaks.getProducts("hermes", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/louisvutton", (req, res) => {
  sneaks.getProducts("louisvutton", 40, function (err, products) {
    res.send(products);
  });
});

//SPORTS SHOES
app.get("/jordans", (req, res) => {
  sneaks.getProducts("jordans", 200, function (err, products) {
    res.send(products);
  });
});
app.get("/adidas", (req, res) => {
  sneaks.getProducts("adidas", 40, function (err, products) {
    res.send(products);
  });
});

app.get("/nike", (req, res) => {
  sneaks.getProducts("nike", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/yeezy", (req, res) => {
  sneaks.getProducts("yeezy", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/newbalance", (req, res) => {
  sneaks.getProducts("newbalance", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/reebok", (req, res) => {
  sneaks.getProducts("reebok", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/converse", (req, res) => {
  sneaks.getProducts("converse", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/puma", (req, res) => {
  sneaks.getProducts("puma", 40, function (err, products) {
    res.send(products);
  });
});

//CASUAL
app.get("/vans", (req, res) => {
  sneaks.getProducts("vans", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/crocs", (req, res) => {
  sneaks.getProducts("crocs", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/clarks", (req, res) => {
  sneaks.getProducts("clarks", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/birkenstocks", (req, res) => {
  sneaks.getProducts("birkenstocks", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/ugg", (req, res) => {
  sneaks.getProducts("ugg", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/timberland", (req, res) => {
  sneaks.getProducts("timberland", 40, function (err, products) {
    res.send(products);
  });
});
app.get("/drmartens", (req, res) => {
  sneaks.getProducts("drmartens", 40, function (err, products) {
    res.send(products);
  });
});

app.listen(PORT, () => console.log(`server started on ${PORT}`));
