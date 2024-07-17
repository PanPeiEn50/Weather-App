import React from 'react';

const Temperature = ({weather}) => {
    if (!weather) return null;

    return (
        <div> 
            <p>Temperature: {weather.main.temp}°C</p>
        </div>
    );
};

export default Temperature;