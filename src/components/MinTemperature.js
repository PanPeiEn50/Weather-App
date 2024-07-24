import React from 'react';

const MinTemperature = ({weather}) => {
    if (!weather) return null;
    const roundedTemp = Math.round(weather.main.temp_min);

    return (
        <div className="min-temperature-box"> 
            <div className="text-content">
                <p>Min Temperature: </p>
                <p>{roundedTemp}</p>
                <p>°C</p>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/6740/6740811.png" alt="min-temperature" className="min-temperature-icon" />
        </div>
    );
};

export default MinTemperature;