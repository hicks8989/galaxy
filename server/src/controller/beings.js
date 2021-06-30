// Dependencies:
const Being = require("../model/beings");

// Create counts:
let galaxyCount = {};
let planetCount = {};

// Sorting algorithm:
function prioritySort(a, b) {
    if (a.priority == b.priority) {
        a_network = galaxyCount[a.galaxy] + 2 * planetCount[a.planetCount];
        b_network = galaxyCount[b.galaxy] + 2 * planetCount[b.planetCount];

        return b_network - a_network;
    }
    return a.priority - b.priority;
}

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

// Controllers:
exports.getBeings = async (req, res, next) => {
    // Get all beings:
    try {
        // Get the query:
        const query = { "$regex": req.query.q || "", "$options": "$i" };
        const data = await Being
            .find({ "name": query});

        // Sort the list:
        data.sort(prioritySort);

        // TODO: Down the line, send the sorted data.
        return res.status(200).json({
            message: "Successfully fetched all beings from server.",
            data
        });
    } catch(e) {
        res.status(500).json({
            message: "Failed to get all beings",
            errors: e
        });
    }
}

exports.createBeing = async (req, res, next) => {
    // Create a being:
    try {
        if (primes.includes(req.body.galaxy)) {
            if (req.body.planet != "Pluto") throw Error("Invalid planet for prime numbered galaxy");
        } else {
            if (req.body.planet == "Pluto") throw Error("Invalid planet for prime numbered galaxy");
        }

        const being = new Being({
            ...req.body
        });

        // Make sure being saves:
        const result = await being.save();

        // Increment the galaxy and planet count:
        const galaxy = result.galaxy;
        if (galaxy in galaxyCount) {
            galaxyCount[galaxy] += 1;
        } else {
            galaxyCount[galaxy] = 1;
        }

        const planet = `${galaxy} - ${result.planet}`
        if (planet in planetCount) {
            planetCount[planet] += 1;
        } else {
            planetCount[planet] = 1;
        }

        return res.status(201).json({
            message: "Successfully created new being.",
            data: result,
        });

    } catch(e) {
        res.status(500).json({
            message: "Failed to create new being",
            errors: e
        });
    }
}

exports.deleteBeing = async (req, res, next) => {
    // Delete a being:
    try {
        await Being.deleteOne({ _id: req.params.beingId });

        // Decrement the galaxy and planet count:
        const galaxy = req.body.galaxy;
        galaxyCount[galaxy] -= 1;

        const planet = `${galaxy} - ${req.body.planet}`
        planetCount[planet] -= 1;

        return res.status(204).json({
            message: "Successfully deleted being"
        });
    } catch(e) {
        res.status(500).json({
            message: "Failed to delete being",
            errors: e
        });
    }
}