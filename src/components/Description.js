import React from 'react';

const Description = ({ weather }) => {
  if (!weather) return null;

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default Description;
