const mongoose = require("mongoose");

// Get shcema and objectId:
const Schema = mongoose.Schema;

// Planets for validation:
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

// Being Schema:
const beingSchema = new Schema({
    name: {
        type: String,
        required: [true, "A name is required to input a being into the database."],
        validate: [(name) => {
            return name.length > 0;
        }, "Your name can't be empty."]
    },
    galaxy: {
        type: Number,
        required: [true, "A galaxy is required to input a being into the database."],
        integer: true,
        validate: [(galaxy) => {
            return galaxy.isInteger && galaxy >= 1 && galaxy <= 999; 
        }]
    },
    planet: {
        type: String,
        required: [true, "A planet is required to input a being into the database."],
        validate: [(planet) => {
            return planets.includes(planet);
        }]
    },
    description: {
        type: String
    },
    priority: {
        type: Number,
        required: [true, "A priority number is required to input a being into the database."],
        validate: [(priority) => {
            return priority.isInteger && priority >= 1 && priority <= 5;
        }]
    }
});
  
  
// Export User Schema:
module.exports = mongoose.model("Being", beingSchema);