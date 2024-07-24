import React from 'react';

const Sunset = ({ weather }) => {
    if (!weather) return null;

    // Convert sunrise and sunset times from UTC to local time
    const sunriseTime = new Date((weather.sys.sunrise + weather.timezone) * 1000);
    const sunsetTime = new Date((weather.sys.sunset + weather.timezone) * 1000);

    // Format times to 24-hour format
    const formatTime = (date) => {
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };

    const formattedSunriseTime = formatTime(sunriseTime);
    const formattedSunsetTime = formatTime(sunsetTime);

    return (
        <div className="sunset-box">
            <div className="text-content">
                <p>Sunrise: </p>
                <p>{formattedSunriseTime}</p>
                <p>Sunset: </p>
                <p>{formattedSunsetTime}</p>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/3222/3222724.png" alt="sunset" className="sunset-icon" />
        </div>
    );
};

export default Sunset;
