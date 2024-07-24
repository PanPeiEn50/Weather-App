import React from 'react';

const Description = ({ weather }) => {
  if (!weather) return null;
  
  const roundedTemp = Math.round(weather.main.temp);
  const description = weather.weather[0].description;
  const imageIcon = weather.weather[0].icon;

  const iconPath = require(`../imgs/${imageIcon}.svg`);

  return (
    <div className="description-box">
      <div className="description-text-content">
        <h2>{weather.name}</h2>
        <p>{roundedTemp} °C</p>
        <p>Weather: {description}</p>
        <img src={iconPath} alt="weather-icon" className="weather-icon" />
      </div>
    </div>
  );
};

export default Description;
