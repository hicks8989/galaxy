const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connect to the database.
const connect = mongoose
    .connect("mongodb://localhost:27017/galaxy", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).catch(e => console.log(e));

// Require the needed db models.
require("./model/beings");

// Log connection status to console:
mongoose.connection.on("connected", () =>
    console.log("Successfully connected to db.")
);
mongoose.connection.on("disconnected", () =>
    console.log("Successfully disconnected from db.")
);
mongoose.connection.on("error", e => console.log("Error connecting to db:", e));

module.exports = connect;