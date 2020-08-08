const Shoe = require("../models/shoe");
const { response } = require("express");

module.exports = {
  addShoe: async (req, res) => {
    const newShoe = new Shoe({ brand: req.body.brand, price: req.body.price });

    try {
      await newShoe.save();
      res.send(newShoe);
    } catch (err) {
      res.send(err);
    }
  },

  getShoes: async (req, res) => {
    // Shoe.find()
    //   .then((allShoes) => res.send(allShoes))
    //   .catch((err) => res.send(err));

    try {
      const allShoes = await Shoe.find();

      // console.log(allShoes[0]);
      // allShoes[0].colorWay.push("blue");
      // console.log(allShoes[0]);

      res.send(allShoes);
    } catch (err) {
      res.send(err);
    }
  },

  findShoe: async (req, res) => {
    try {
      const foundShoe = await Shoe.findById(req.params.id);
      res.send(foundShoe);
    } catch (err) {
      res.send(err);
    }
  },

  updateBrand: async (req, res) => {
    try {
      const updateBrand = await Shoe.findById(req.body.id);
      updateBrand.brand = req.body.brand;
      await updateBrand.save();
      res.send(updateBrand);
    } catch (err) {
      res.send(err);
    }
  },

  updatePrice: async (req, res) => {
    try {
      const updatePrice = await Shoe.findById(req.body.id);
      updatePrice.price = req.body.price;
      await updatePrice.save();
      res.send(updatePrice);
    } catch (err) {
      res.send(err);
    }
  },

  deleteShoe: async (req, res) => {
    try {
      const shoeToDelete = await Shoe.findById(req.params.id);
      shoeToDelete = remove();
      res.send("success");
    } catch (err) {
      res.send(err);
    }
  },
};

// Shoe.findById(req.params.id)
//   .then((foundShoe) => res.send(foundShoe))
//   .catch((err) => res.send(err));
//   },
// };

// OLD way
// addShoe: (req, res) =>
//   Shoe.create({
//     brand: req.body.brand,
//     price: req.body.price,
//   })
//     .then((newShoe) => res.send(newShoe))
//     .catch((err) => res.send(err)),
// };
