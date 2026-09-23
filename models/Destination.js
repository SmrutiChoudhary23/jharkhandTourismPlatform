//Part 5
const mongoose = require("mongoose");
const destinationSchema = new mongoose.Schema({
    name: String,
    district: String,
    category: String,
    description: String,
    image: String,
    bestTime: String,
    estimatedCost: Number
});
module.exports = mongoose.model("Destination", destinationSchema);