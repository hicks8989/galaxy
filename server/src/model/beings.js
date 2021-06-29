const mongoose = require("mongoose");

// Get shcema and objectId:
const Schema = mongoose.Schema;

// generatePrimes function:
const generatePrimes = (max) => {
    let primes = [2];
 
    for(let n = 3; n < max; n += 2) {
        let isPrime = true;
        for (let i = 0; i < primes.length; i++) {
            if (n % primes[i] == 0) {
                isPrime = false;
            }
        }

        if (isPrime) primes.push(n);
    }
 
    return primes;
}

const primes = generatePrimes(1000);
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

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
            // Check if the galaxy is prime:
            if (this.galaxy in primes) {
                return planet == "Pluto";
            } else {
                return planet in planets;
            }
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