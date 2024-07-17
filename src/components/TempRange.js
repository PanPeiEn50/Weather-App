import React from 'react';

const TempRange = ({weather}) => {
    if (!weather) return null;

    return (
        <div> 
            <p>Min Temp: {weather.main.temp_min}°C</p>
            <p>Max Temp: {weather.main.temp_max}°C</p>
        </div>
    );
};

export default TempRange;