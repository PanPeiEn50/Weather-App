import React from 'react';

const MaxTemperature = ({weather}) => {
    if (!weather) return null;
    const roundedTemp = Math.round(weather.main.temp_max);

    return (
        <div className="max-temperature-box"> 
            <div className="text-content">
                <p>Max Temperature: </p>
                <p>{roundedTemp}</p>
                <p>°C</p>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/6740/6740814.png" alt="max-temperature" className="max-temperature-icon" />
        </div>
    );
};

export default MaxTemperature;