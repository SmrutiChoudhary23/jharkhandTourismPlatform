//Part 6
const mongoose = require("mongoose");
const tripSchema = new mongoose.Schema({
    userId: String,
    destinationId: String,
    destinationName: String,
    district: String,
    image: String,
    startingLocation: String,
    budget: Number,
    days: Number,
    interest: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Trip", tripSchema);