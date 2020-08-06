const router = require("express").Router();
const { test } = require("../controllers/test-controller");

// This is the long version of 1st line
// const express = require("express");
// const router = express.Router();

router.get("/test", test);

module.exports = router;
