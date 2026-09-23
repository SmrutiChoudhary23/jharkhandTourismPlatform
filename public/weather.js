/*Weather Page*/
//Part 4
const cityInput = document.querySelector("#cityInput")
const weatherButton = document.querySelector("#weatherButton")

const cityName = document.querySelector("#cityName");
const temperatureElement = document.querySelector("#temperature");
const conditionElement = document.querySelector("#condition");
const humidityElement = document.querySelector("#humidity");
const windElement = document.querySelector("#wind");
weatherButton.addEventListener("click", async function()
{
    const city = cityInput.value
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
    const data = await response.json()
    console.log(data)
    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;
    console.log(latitude);
    console.log(longitude);
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`); 
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    const temperature = weatherData.current.temperature_2m;
    const humidity = weatherData.current.relative_humidity_2m;
    const windSpeed = weatherData.current.wind_speed_10m;
    const weatherCode = weatherData.current.weather_code;
    let condition = "";
    if(weatherCode === 0) condition = "Clear Sky";
    else if(weatherCode === 1 || weatherCode === 2) condition = "Partly Cloudy";
    else if(weatherCode === 3) condition = "Overcast";
    else if(weatherCode >= 51 && weatherCode <= 57) condition = "Drizzle";
    else if(weatherCode >= 61 && weatherCode <= 67) condition = "Rain";
    else if(weatherCode >= 71 && weatherCode <= 77) condition = "Snow";
    else if(weatherCode >= 80 && weatherCode <= 82) condition = "Rain Showers";
    else if(weatherCode >= 95) condition = "Thunderstorm";
    else condition = "Unknown";
    console.log(temperature);
    console.log(humidity);
    console.log(windSpeed);
    console.log(weatherCode); 
    cityName.textContent = city;
    temperatureElement.textContent = `Temperature: ${temperature} °C`;
    conditionElement.textContent = `Condition: ${condition}`;
    humidityElement.textContent = `Humidity: ${humidity}%`;
    windElement.textContent = `Wind Speed: ${windSpeed} km/h`;
    console.log(weatherCode);
});