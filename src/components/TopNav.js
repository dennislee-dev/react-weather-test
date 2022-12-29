import React from 'react';

const TopNav = ({ cityNames, city, setCity }) => {
    return (
        <div className="top-nav">
            {cityNames.map((item, index) => (
                <div className={`nav ${city === index && "selected"}`} key={item.name} onClick={() => setCity(index)}>
                    {item.name.toUpperCase()}
                </div>
            ))}
        </div>
    )
}

export default TopNav;