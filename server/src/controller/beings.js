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
        await Being.deleteOne({ _id: req.body._id });

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