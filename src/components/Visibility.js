import React from 'react';

const Visibility = ({ weather }) => {
    if (!weather) return null;

    // Convert visibility from meters to kilometers
    const visibilityInKm = (weather.visibility / 1000).toFixed(1);

    return (
        <div className="visibility-box"> 
            <div className="text-content">
                <p>Visibility: </p>
                <p>{visibilityInKm}</p>
                <p>km</p>
                <img src="https://cdn-icons-png.flaticon.com/512/802/802067.png" alt="humidity" className="visibility-icon" />
            </div> 
        </div>
    );
};

export default Visibility;
