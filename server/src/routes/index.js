const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
    res.status(200).send({ message: "Welcome to the API." });
});

router.use("/beings", require("./beings"));

module.exports = router;