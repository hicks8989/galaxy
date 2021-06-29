// Dependencies:
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

// Bcrypt
const saltRounds = 10;
const plainTextPassword = 'hunter2';
let hashedPassword = "";

// Generate hash for password.
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(plainTextPassword, salt, function(err, hash) {
        hashedPassword = hash;
    });
});

// Get Private Key:
const privateKey = "DcyIO>+;k?re$goz'%<!NOs>Mg['s";
const signOptions = { algorithm: "HS256" };



// Controllers:
exports.login = async (req, res, next) => {
    try {
        const match = await bcrypt.compare(req.body.password, hashedPassword);

        if (!match) {
            throw new Error("Invalid login credentials");
        }

        const token = jwt.sign({ pass: "hunter2" }, privateKey, signOptions);

        // Return JWT:
        res.set("Authorization", "Bearer " + token);
        res.status(200).json({
            message: "Authenticated",
            token
        });
    } catch(e) {
        res.status(500).json({
            message: "Errors logging in",
            errors: e
        });
    }
}