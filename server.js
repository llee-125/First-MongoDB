const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

// sets up our app for json and url encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// creates connection to mongodb
mongoose.connect("mongodb://localhost/shoe_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// creates connection to mongodb
const shoeRoutes = require("./Routes/shoe-routes");
app.use(shoeRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
