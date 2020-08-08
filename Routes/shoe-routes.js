const router = require("express").Router();
const shoeController = require("../Controllers/shoe-controller.js");

// this will create a new shoe
router.post("/Shoe", shoeController.addShoe);

// this will get all the shoes
router.get("/shoe", shoeController.getShoes);

router.get("/shoe/:id", shoeController.findShoe);

router.patch("/shoe", shoeController.updateBrand);

router.patch("/shoe/price", shoeController.updatePrice);

router.delete("/shoe/:id", shoeController.deleteShoe);

module.exports = router;
