const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()

const Destination = require("./models/Destination");

const app = express()
app.use(express.static("public"));

app.get("/", (req, res) => 
{
    res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/explore", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "explore.html"));
});

app.get("/plan", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "planYourTrip.html"));
});

app.get("/ai-guide", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "AITravelGuide.html"));
});

app.get("/culture", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "CultureAndHeritage.html"));
});

app.get("/my-trips", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "MyTrips.html"));
});

app.get("/tourist-data-analytics", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "TouristDataAnalytics.html"));
});

app.get("/handicrafts", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "Handicrafts.html"));
});

app.get("/weather", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "Weather.html"));
});

app.get("/my-profile", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "MyProfile.html"));
});

mongoose.connect(process.env.MONGO_URI)
.then(function()
{
    console.log("MongoDB connected successfully");
})
.catch(function(error)
{
    console.log("MongoDB connection failed:", error);
});

app.get("/add-test-destination", async (req, res) => {
    const destination = new Destination({
        name: "Dassam Falls",
        district: "Ranchi",
        category: "Waterfalls",
        description: "A popular waterfall near Ranchi.",
        image: "images/dassam-falls.jpg",
        bestTime: "October to February",
        estimatedCost: 500
    });
    await destination.save();
    res.send("Destination saved successfully");
});

app.get("/api/destinations", async (req, res) => {
    const destinations = await Destination.find();
    res.json(destinations);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});