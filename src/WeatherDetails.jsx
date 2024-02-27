import React from "react";

const WeatherDetails = ({ data }) => {
  // Extract necessary data from the 'data' prop and use it in your JSX
  const temperature = Math.round(data.current.temp_c);
  const condition = data.current.condition.text;
  // ... Extract other data as needed

  return (
    <div className="weather-details">
      <h1 className="temp">{temperature}&#176;</h1>
      {/* Render other weather details */}
      <p className="condition">{condition}</p>
    </div>
  );
};

export default WeatherDetails;
