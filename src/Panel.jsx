import React, { useState, useEffect } from "react";
import "./style/Panel.css";
import ForecastHourly from "./ForecastHourly";
import AirCondition from "./AirConditions";
import "@fortawesome/fontawesome-free/css/all.css";

const Panel = ({ fetchWeatherData, weatherData }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    fetchWeatherData(searchInput);
  };

  const handleCityClick = (city) => {
    fetchWeatherData(city);
  };

  return (
    <div className="panel">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="search"
          placeholder="Search Location..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>

      <ul className="cities">
        <li className="city" onClick={() => handleCityClick("Brussels")}>
          Brussels
        </li>
        <li className="city" onClick={() => handleCityClick("Istanbul")}>
          Istanbul
        </li>
        <li className="city" onClick={() => handleCityClick("Dubai")}>
          Dubai
        </li>
        <li className="city" onClick={() => handleCityClick("Tokyo")}>
          Tokyo
        </li>
      </ul>

      <ul className="details">
        <div className="weather-app">
          {weatherData ? (
            <>
              <li>
                {" "}
                <AirCondition weatherData={weatherData.current} />
              </li>
              <li>
                <ForecastHourly
                  hourlyForecast={weatherData?.forecast?.forecastday[0]?.hour}
                  city={weatherData.location.name}
                />
              </li>
            </>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Panel;
