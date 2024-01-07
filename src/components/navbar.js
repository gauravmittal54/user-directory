// components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { fetchTimezoneDetails } from '../api';
import DigitalClock from './clock';

const Navbar = ({ handleGoBack, selectedCountry, handleCountryChange, countries }) => {
    const [currentCountry, setCurrentCountry] = useState(selectedCountry);

    useEffect(() => {
        // Update the currentCountry state when selectedCountry changes
        setCurrentCountry(selectedCountry);
    }, [selectedCountry]);

    return (
        <div id='navbar'>
            <div>
                <button onClick={handleGoBack} id='back-button'>Back</button>
            </div>
            <div>
                <select id="country" value={selectedCountry} onChange={handleCountryChange}>
                    <option value="">Country Dropdown</option>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>
            {console.log(selectedCountry)}
            {currentCountry && <div>
                <span >
                    <DigitalClock selectedCountry={currentCountry} />
                </span>
            </div>}
            
        </div>
    );
};

export default Navbar;
