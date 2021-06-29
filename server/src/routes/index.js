const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/", function(req, res, next) {
    res.status(200).send({ message: "Welcome to the API." });
});

router.use("/auth", require("./auth"));
router.use("/beings", passport.authenticate("jwt", { session: false }), require("./beings"));

module.exports = router;