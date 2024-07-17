import React from 'react';

const FeelsLike = ({weather}) => {
    if (!weather) return null;

    return (
        <div> 
            <p>Feels like: {weather.main.feels_like}°C</p>
        </div>
    );
};

export default FeelsLike;