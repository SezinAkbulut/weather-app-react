import React, { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";
import ForecastHourly from "./ForecastHourly";
import WeeklyForecast from "./WeeklyForecast";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    console.log("Fetching weather data...");
    fetchWeatherData("Gent");
  }, []);

  const fetchWeatherData = async (cityInput) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=75873978036c4398b78102839242702&q=${cityInput}&q=07112&days=7`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log("Weather data fetched:", data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("City not found, please try again");
    }
  };

  const formatDatum = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  console.log("Rendering WeatherApp...");

  return (
    <div className="weather-app">
      {weatherData && (
        <>
          <ForecastHourly
            hourlyForecast={weatherData?.forecast?.forecastday[0]?.hour}
          />
          <WeeklyForecast weeklyForecast={weatherData?.forecast?.forecastday} />
          {/* ... Render other components */}
        </>
      )}

      <div className="container">
        <div className="current">
          <h1 className="temp">{weatherData?.current?.temp_c}&#176;</h1>
          <div className="city-time">
            <h1 className="name">{weatherData?.location?.name}</h1>

            <small>
              <span className="time">
                {weatherData?.location?.localtime.split(" ")[1]}
              </span>
              <span className="date">
                {formatDatum(weatherData?.location?.localtime.split(" ")[0])}
              </span>
            </small>
          </div>
          <div className="weather">
            <img
              className="icon"
              src={`https:${weatherData?.current?.condition?.icon}`}
              alt="icon"
              width="50"
              height="50"
            />
            <span className="condition">
              {weatherData?.current?.condition?.text}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
