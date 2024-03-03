import React from "react";
import "./style/WeatherDetails.css";

const WeatherDetails = ({ data }) => {
  if (!data) {
    return null;
  }

  const getDayName = (dateString) => {
    const options = { weekday: "long" };
    const dayName = new Date(dateString).toLocaleDateString("en-US", options);
    return dayName;
  };

  const formatDatum = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const temperature = Math.round(data.current.temp_c);
  const condition = data.current.condition.text;
  const cityName = data.location.name;

  return (
    <div className="weather-details-container">
      <h3 className="brand">The Weather App</h3>
      <div className="container">
        <div className="current">
          <h1 className="temp">{temperature}&#176;</h1>
          <div className="city-time">
            <h1 className="name">{cityName}</h1>
            <small>
              <span className="date">
                {getDayName(data.location.localtime.split(" ")[0])} |{" "}
                {formatDatum(data.location.localtime.split(" ")[0])}
              </span>
            </small>
          </div>
          <div className="weather">
            <img
              className="icon"
              src={`https:${data.current.condition.icon}`}
              alt="icon"
              width="50"
              height="50"
            />
            <span className="condition">{condition}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
