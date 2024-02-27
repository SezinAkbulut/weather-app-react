// WeeklyForecast.jsx
import React from "react";

const WeeklyForecast = ({ weeklyForecast }) => {
  if (!weeklyForecast) {
    return null;
  }

  // Add a console.log to see the weeklyForecast data
  console.log("Weekly Forecast Data:", weeklyForecast);

  const renderDailyForecast = () => {
    return weeklyForecast.map((day, index) => (
      <div key={index} className="daily-forecast">
        <h3>{formatDatum(day.date)}</h3>
        <img
          className="icon"
          src={`https:${day.day.condition.icon}`}
          alt="icon"
          width="50"
          height="50"
        />
        <p>{Math.round(day.day.avgtemp_c)}&#176;C</p>
        <p>{day.day.condition.text}</p>
      </div>
    ));
  };

  const formatDatum = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  return <div className="weekly-forecast">{renderDailyForecast()}</div>;
};

export default WeeklyForecast;
