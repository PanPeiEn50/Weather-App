import React from 'react';

const Visibility = ({weather}) => {
    if (!weather) return null;

    return (
        <div> 
            <p>Visibility: {weather.visibility}</p>
        </div>
    );
};

export default Visibility;