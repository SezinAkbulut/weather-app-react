import React, { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData("Gent");
  }, []);

  const fetchWeatherData = async (cityInput) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=6b0be4b511734f20b8e92852231411&q=${cityInput}&q=07112&days=7`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("City not found, please try again");
    }
  };

  return (
    <div className="weather-app">
      {/* Rest of your JSX code goes here */}
      {/* Use weatherData to render the weather information */}
      {weatherData && <WeatherDetails data={weatherData} />}
    </div>
  );
};

export default WeatherApp;
