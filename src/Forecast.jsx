import React from "react";

const Forecast = ({ forecastData }) => {
  // Map over forecastData and render forecast cards
  const forecastCards = forecastData.map((forecast, index) => (
    <div key={index} className="forecast-card">
      {/* Render forecast card content */}
    </div>
  ));

  return <div className="forecast-container">{forecastCards}</div>;
};

export default Forecast;
