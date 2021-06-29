// Dependencies:
const express = require("express");
const authController = require("../controller/auth");

// Require Middleware:
require("../middleware/passport");

// Create Router:
const router = express.Router();

// Create Route Handlers:
router.post("/login", authController.login);

module.exports = router;