const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  brand: {
    type: String,
    required: "Must enter a shoe brand",
  },

  price: {
    type: String,
    required: "Must enter a price",
  },

  colorWay: { type: [String], required: true, default: [] },
});

// This will run BEFORE the instance is saved to the db
shoeSchema.pre("save", (next) => {
  console.log("This is going to save");
  next();
});

shoeSchema.pre("remove", (next) => {
  console.log("This will be removed");
  next();
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
