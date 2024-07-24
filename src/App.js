import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import MaxTemperature from './components/MaxTemperature';
import FeelsLike from './components/FeelsLike';
import Humidity from './components/Humidity';
import MinTemperature from './components/MinTemperature';
import Sunset from './components/Sunset';
import Visibility from './components/Visibility';
import Description from './components/Description';

import './Weather.css';

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = 'd6abd7f801b10209718758ef178d5408';
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      alert(error.message);
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather('Taipei'); // Default city
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search fetchWeather={fetchWeather} />
      <div className="weather-info">
        {weather && (
          <>
            <div className="large-box">
              <Description weather={weather} />
            </div>
            <div className="small-box">
              <FeelsLike weather={weather} />
            </div>
            <div className="small-box">
              <MinTemperature weather={weather} />
            </div>
            <div className="small-box">
              <MaxTemperature weather={weather} />
            </div>
            <div className="small-box">
              <Humidity weather={weather} />
            </div>
            <div className="small-box">
              <Sunset weather={weather} />
            </div>
            <div className="small-box">
              <Visibility weather={weather} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
