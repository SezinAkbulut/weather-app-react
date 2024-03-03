import React, { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";
import WeeklyForecast from "./WeeklyForecast";
import Panel from "./Panel";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    console.log("Fetching weather data...");
    fetchWeatherData("Gent");
  }, []);

  useEffect(() => {
    if (weatherData) {
      const sunrise = new Date(
        weatherData.forecast.forecastday[0].astro.sunrise
      );
      const sunset = new Date(weatherData.forecast.forecastday[0].astro.sunset);
      const currentDateTime = new Date(weatherData.location.localtime);

      if (currentDateTime > sunrise && currentDateTime < sunset) {
        setBackgroundImage("morning.jpg");
      } else {
        setBackgroundImage("night.jpg");
      }
    }
  }, [weatherData]);

  const fetchWeatherData = async (cityInput) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=75873978036c4398b78102839242702&q=${cityInput}&q=07112&days=14`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log("Weather data fetched:", data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("City not found, please try again");
    }
  };

  console.log("Rendering WeatherApp...");

  return (
    <div
      className="weather-app"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <WeatherDetails data={weatherData} />
      <WeeklyForecast weeklyForecast={weatherData?.forecast?.forecastday} />
      <Panel weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </div>
  );
};

export default WeatherApp;
