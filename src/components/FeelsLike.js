import React from 'react';

const FeelsLike = ({weather}) => {
    if (!weather) return null;
    const roundedTemp = Math.round(weather.main.feels_like);

    return (
        <div className="feels-like-box">
            <div className="text-content">
                <p>Feels like: </p>
                <p>{roundedTemp}</p>
                <p>°C</p>
            </div> 
            <img src="https://static.vecteezy.com/system/resources/previews/019/860/394/original/thermometer-icon-colorful-free-png.png" alt="feels-like" className="feels-like-icon" />
        </div>
    );
};

export default FeelsLike;