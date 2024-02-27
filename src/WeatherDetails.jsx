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
      <div className="current">
        <div className="details">
          <div className="name-group">
            <img
              className="location-icon"
              src="assets/Frame 3.png"
              alt="Location Icon"
            />
            <h1 className="name">{cityName}</h1>
            <img
              className="arrow-icon"
              src="assets/Vector.png"
              alt="Arrow Icon"
            />
          </div>

          <span className="condition">{condition}</span>
          <h1 className="temp">{temperature}&#176;</h1>
          <div className="city-time">
            <span className="day">
              {getDayName(data.location.localtime.split(" ")[0])}
            </span>{" "}
            <span> | </span>
            <span className="date">
              {formatDatum(data.location.localtime.split(" ")[0])}
            </span>
          </div>
        </div>
      </div>
      <div className="weather">
        <img
          className="icon"
          src={`https:${data.current.condition.icon}`}
          alt="icon"
          width="50"
          height="50"
        />
      </div>
    </div>
  );
};

export default WeatherDetails;
