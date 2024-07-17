import React from 'react';

const Sunset = ({weather}) => {
    if (!weather) return null;

    return (
        <div> 
            <p>Sunset: {weather.sys.sunset}</p>
        </div>
    );
};

export default Sunset;