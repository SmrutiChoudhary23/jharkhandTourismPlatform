const express = require('express')
const path = require('path')

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

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});