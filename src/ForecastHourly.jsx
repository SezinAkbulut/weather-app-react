import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import "./style/ForecastHourly.css";

const ForecastHourly = ({ hourlyForecast }) => {
  console.log("Hourly Forecast Data:", hourlyForecast);

  // Find the index of the current hour
  const currentHourIndex = hourlyForecast.findIndex((hour) => {
    const now = new Date();
    const hourTime = new Date(hour.time);
    return now.getHours() === hourTime.getHours();
  });

  // Slice the array to get the next 6 hours, handling the case where the current hour is not found
  const next6Hours =
    currentHourIndex !== -1
      ? hourlyForecast.slice(currentHourIndex, currentHourIndex + 6)
      : [];

  // Extract labels (hours) and temperatures for Chart.js
  const labels = next6Hours.map((hour) => hour.time.split(" ")[1]);
  const temperatures = next6Hours.map((hour) => hour.temp_c);

  // Create a chart
  const chartRef = useRef();
  useEffect(() => {
    if (!hourlyForecast || hourlyForecast.length === 0) {
      return;
    }

    // Destroy existing chart if it exists
    const existingChart = Chart.getChart(chartRef.current);
    if (existingChart) {
      existingChart.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Temperature",
            data: temperatures,
            borderColor: "#FFEB3B",
            borderWidth: 1,
            pointBackgroundColor: "#FFEB3B",
            pointRadius: 3,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            beginAtZero: false,
            display: false,
          },
        },
        elements: {
          line: {
            tension: 0.2,
          },
        },
        plugins: {
          wave: {
            amplitude: 5,
            frequency: 0.1,
          },
          legend: {
            display: false,
          },
        },
      },
    });
  }, [hourlyForecast]);

  return (
    <div className="forecasth">
      <h5 className="hourly-forecast">24-hour forecast</h5>
      <canvas className="chart" ref={chartRef} width={500} height={50}></canvas>
    </div>
  );
};

export default ForecastHourly;
