import React from "react";

const ForecastHourly = ({ hourlyForecast }) => {
  console.log("Hourly Forecast Data:", hourlyForecast);

  return (
    <div className="forecast">
      <h2>Hourly Forecast</h2>
      <ul className="hourly-forecast">
        {hourlyForecast.map((hour) => (
          <li key={hour.time_epoch}>
            <p className="hour">{hour.time.split(" ")[1]}</p>
            <img
              className="hourly-icon"
              src={`https:${hour.condition.icon}`}
              alt="icon"
              width="30"
              height="30"
            />
            <p className="hourly-temp">{hour.temp_c}&#176;</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastHourly;
