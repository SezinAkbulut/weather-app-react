import React, { useState, useEffect } from "react";
import "./style/AirCondation.css";

const AirCondition = ({ weatherData }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(timeString);
    };

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ul className="air-condition">
      {/*   <p className="current-time">{currentTime}</p>*/}
      <h4>Weather Details</h4>

      {weatherData ? (
        <div className="weather-info">
          <li>Real Feel: {weatherData.feelslike_c}&#176;C</li>
          <li>Wind: {weatherData.wind_kph} km/h</li>
          <li>Humidity: {weatherData.humidity} % </li>
          <li>UV Index: {weatherData.uv}</li>
        </div>
      ) : (
        <p>Loading current weather data...</p>
      )}
    </ul>
  );
};

export default AirCondition;
