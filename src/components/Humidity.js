import React from 'react';

const Humidity = ({weather}) => {
    if (!weather) return null;

    return (
        <div> 
            <p>Min Temp: {weather.main.humidity}°C</p>
        </div>
    );
};

export default Humidity;