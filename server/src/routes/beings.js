// Dependencies:
const express = require("express");
const beingController = require("../controller/beings");

// Create Router:
const router = express.Router();

// Create Route Handlers:
router.get("/", beingController.getBeings);
router.post("/", beingController.createBeing);
router.delete("/:beingId", beingController.deleteBeing);

module.exports = router;