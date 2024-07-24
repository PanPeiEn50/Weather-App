import React from 'react';

const Humidity = ({weather}) => {
    if (!weather) return null;

    return (
        <div className="humidity-box"> 
            <div className="text-content">
                <p>Humidity: </p>
                <p>{weather.main.humidity}</p>
                <p>%</p>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/3262/3262966.png" alt="humidity" className="humidity-icon" />
        </div>
    );
};

export default Humidity;
