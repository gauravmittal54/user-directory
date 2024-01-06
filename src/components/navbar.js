// components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { fetchTimezoneDetails } from '../api';

const Navbar = ({ handleGoBack, selectedCountry, handleCountryChange, countries }) => {
    const [timezoneDetails, setTimezoneDetails] = useState(null);
    const [clockPaused, setClockPaused] = useState(false);
    const clockIntervalRef = useRef(null);
    const lastFetchTimeRef = useRef(null);

    const formatDatetimeString = (datetimeString) => {
        // Split the datetime string at 'T', take the second part, and then split again at '.'
        const timeString = datetimeString.split('T')[1].split('.')[0];
        return timeString;
    };

    useEffect(() => {
        const fetchTimezone = async () => {
            try {
                if (selectedCountry) {
                    const details = await fetchTimezoneDetails(selectedCountry);
                    setTimezoneDetails(details);
                    lastFetchTimeRef.current = new Date().getTime();
                }
            } catch (error) {
                console.error('Error fetching timezone details:', error);
            }
        };

        fetchTimezone();
    }, [selectedCountry]);

    useEffect(() => {
        if (!clockPaused) {
            const intervalId = setInterval(() => {
                if (lastFetchTimeRef.current) {
                    // Calculate time difference since last fetch
                    const currentTime = new Date().getTime();
                    const elapsedTime = currentTime - lastFetchTimeRef.current;

                    // Fetch and update the current time
                    fetchTimezoneDetails(selectedCountry)
                        .then(details => {
                            // Update time considering elapsed time
                            const newTime = new Date(details.datetime).getTime() + elapsedTime;
                            details.datetime = new Date(newTime).toISOString();
                            setTimezoneDetails(details);

                            lastFetchTimeRef.current = currentTime;
                        })
                        .catch(error => {
                            console.error('Error updating clock:', error);
                        });
                }
            }, 1000); // Update every second

            clockIntervalRef.current = intervalId;

            return () => {
                // Cleanup interval when component unmounts
                clearInterval(clockIntervalRef.current);
            };
        }
    }, [selectedCountry, clockPaused]);

    const handlePauseStartClick = () => {
        setClockPaused((prevPaused) => !prevPaused);
    };

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
            {timezoneDetails && (
        <div id="clock">
            <span id="clock-text">{formatDatetimeString(timezoneDetails.datetime)}</span>
        </div>
    )}
            <button id='pause-start-button' onClick={handlePauseStartClick}>
                {'Start/Pause'}
            </button>
        </div>
    );
};

export default Navbar;
