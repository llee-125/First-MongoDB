const router = require("express").Router();

// const {} = require("../Controllers/mongo-controller");

router.get("/test", (req, res) => {
  res.send("working");
});

module.exports = router;
