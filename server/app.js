// ==============================================
// Main application.
// ==============================================

const express = require("express");
const cors = require("cors");
const createError = require("http-errors");

// Get the port.
const port = 3000;

// Initialize app.
const app = express();
const apiRouter = require("./src/routes");

// Use Cors.
app.use(cors());

// Get the database.
require("./src/db");

// Api router.
app.use("/api/v1", apiRouter);

// Create a 404 error if the route is not specified.
app.use( (req, res, next) => {
    next(createError("404"));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
  
    // render the error page
    res.status(err.status || 500);
    res.json({ error: err });
});

// Host the app.
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});