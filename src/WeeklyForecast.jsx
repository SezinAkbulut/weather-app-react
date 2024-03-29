import React from "react";
import "./style/WeeklyForecast.css";

const WeeklyForecast = ({ weeklyForecast }) => {
  if (!weeklyForecast || !Array.isArray(weeklyForecast)) {
    // Handle the case where weeklyForecast is undefined or not an array
    return null;
  }

  const getDayName = (dateString) => {
    const options = { weekday: "long" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="days-forecast">
      <ul className="weather-cards">
        {weeklyForecast.slice(0, 5).map((day) => (
          <li key={day.date} className="card">
            <div>
              <div className="city-timeweekly">
                <small>
                  <span className="dateweekly">{getDayName(day.date)}</span>
                </small>
              </div>
              <div className="weatherweekly">
                {day.day && day.day.condition && (
                  <>
                    <img
                      className="icondaily"
                      src={`https:${day.day.condition.icon}`}
                      alt="icon"
                      width="50"
                      height="50"
                    />
                    <h1 className="tempweekly">{day.day.maxtemp_c}&#176;</h1>
                    <span className="conditionweekly">
                      {day.day.condition.text}
                    </span>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyForecast;
