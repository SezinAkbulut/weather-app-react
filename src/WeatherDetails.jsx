import React from "react";

const WeatherDetails = ({ data }) => {
  if (!data) {
    return null;
  }
  const formatDatum = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };
  // Extract necessary data from the 'data' prop
  const temperature = Math.round(data.current.temp_c);
  const condition = data.current.condition.text;
  const cityName = data.location.name;

  return (
    <div className="weather-details-container">
      <div className="current">
        <h1 className="temp">{temperature}&#176;</h1>
        <div className="city-time">
          <h1 className="name">{cityName}</h1>
          <small>
            <span className="time">
              {data.location.localtime.split(" ")[1]}
            </span>
            <span className="date">
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
  );
};

export default WeatherDetails;
