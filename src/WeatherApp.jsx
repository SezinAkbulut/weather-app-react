import React, { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";
import WeeklyForecast from "./WeeklyForecast";
import Panel from "./Panel";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=75873978036c4398b78102839242702&q=${location}&days=14`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log("Weather data fetched:", data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("City not found, please try again");
    }
  };

  useEffect(() => {
    const fetchWeatherByLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(`${latitude},${longitude}`);
        },
        (error) => {
          console.error("Error getting user location:", error);
          // If getting user location fails or denied, default to a specific city (e.g., "Gent")
          fetchWeatherData("Gent");
        }
      );
    };

    console.log("Fetching weather data...");

    // Fetch weather data based on user's location or default city
    fetchWeatherByLocation();
  }, []);

  console.log("Rendering WeatherApp...");

  return (
    <div className="weather-app">
      <WeatherDetails data={weatherData} />
      <WeeklyForecast weeklyForecast={weatherData?.forecast?.forecastday} />
      <Panel weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </div>
  );
};

export default WeatherApp;
