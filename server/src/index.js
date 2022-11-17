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
  sneaks.getProducts("jordans", 60, function (err, products) {
    res.send(products);
  });
});
app.get("/adidas", (req, res) => {
  sneaks.getProducts("adidas", 60, function (err, products) {
    res.send(products);
  });
});

app.get("/nike", (req, res) => {
  sneaks.getProducts("nike", 60, function (err, products) {
    res.send(products);
  });
});
app.get("/ultraboost", (req, res) => {
  sneaks.getProducts("adidasultraboost", 60, function (err, products) {
    res.send(products);
  });
});
app.get("/yeezy", (req, res) => {
  sneaks.getProducts("yeezy", 60, function (err, products) {
    res.send(products);
  });
});
app.get("/newbalance", (req, res) => {
  sneaks.getProducts("newbalance", 60, function (err, products) {
    res.send(products);
  });
});
app.get("/reebok", (req, res) => {
  sneaks.getProducts("reebok", 60, function (err, products) {
    res.send(products);
  });
});
app.get("/converse", (req, res) => {
  sneaks.getProducts("converse", 60, function (err, products) {
    res.send(products);
  });
});
app.get("/puma", (req, res) => {
  sneaks.getProducts("puma", 60, function (err, products) {
    res.send(products);
  });
});

//CASUAL
app.get("/vans", (req, res) => {
  sneaks.getProducts("vans", 80, function (err, products) {
    res.send(products);
  });
});
app.get("/crocs", (req, res) => {
  sneaks.getProducts("crocs", 80, function (err, products) {
    res.send(products);
  });
});
app.get("/asics", (req, res) => {
  sneaks.getProducts("asics", 80, function (err, products) {
    res.send(products);
  });
});
app.get("/clarks", (req, res) => {
  sneaks.getProducts("clarks", 80, function (err, products) {
    res.send(products);
  });
});
app.get("/birkenstocks", (req, res) => {
  sneaks.getProducts("birkenstocks", 80, function (err, products) {
    res.send(products);
  });
});
app.get("/ugg", (req, res) => {
  sneaks.getProducts("ugg", 80, function (err, products) {
    res.send(products);
  });
});
app.get("/timberland", (req, res) => {
  sneaks.getProducts("timberland", 80, function (err, products) {
    res.send(products);
  });
});
app.get("/drmartens", (req, res) => {
  sneaks.getProducts("drmartens", 80, function (err, products) {
    res.send(products);
  });
});

app.listen(PORT, () => console.log(`server started on ${PORT}`));
