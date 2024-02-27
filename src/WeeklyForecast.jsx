import React from "react";

const WeeklyForecast = ({ weeklyForecast }) => {
  if (!weeklyForecast) {
    return null;
  }

  // Assuming weeklyForecast is an array of daily forecast data
  const weeklyForecastCards = weeklyForecast.map((dayForecast, index) => (
    <div key={index} className="weekly-forecast-card">
      <h3>{dayForecast.date}</h3>
      <img
        className="weekly-icon"
        src={`https:${dayForecast.day.condition.icon}`}
        alt="icon"
        width="50"
        height="50"
      />
      <p className="weekly-temp">{dayForecast.day.avgtemp_c}&#176;</p>
      <p className="weekly-condition">{dayForecast.day.condition.text}</p>
    </div>
  ));

  return <div className="weekly-forecast-container">{weeklyForecastCards}</div>;
};

export default WeeklyForecast;
