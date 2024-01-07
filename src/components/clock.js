// components/DigitalClock.js
import React, { useState, useEffect } from 'react';
import { fetchTimezoneDetails } from '../api';

const DigitalClock = ({ selectedCountry }) => {
    const [timezoneDetails, setTimezoneDetails] = useState(null);
    const [initialTime, setInitialTime] = useState(null);
    const [isRunning, setIsRunning] = useState(true);

    const formatDatetimeString = (datetimeString) => {
        const timeString = datetimeString.split('T')[1].split('.')[0];
        return timeString;
    };

    const fetchTimezone = async () => {
        try {
            if (selectedCountry) {
                const details = await fetchTimezoneDetails(selectedCountry);
                setTimezoneDetails(details);
                setInitialTime(formatDatetimeString(details.datetime));
            }
        } catch (error) {
            console.error('Error fetching timezone details:', error);
        }
    };

    useEffect(() => {
        fetchTimezone();
    }, [selectedCountry]);

    useEffect(() => {
        let intervalId;

        const updateClock = () => {
            setInitialTime((prevTime) => {
                const [hours, minutes, seconds] = prevTime.split(':').map(Number);

                // Update seconds
                const newSeconds = seconds + 1;
                const updatedTime =
                    hours.toString().padStart(2, '0') +
                    ':' +
                    minutes.toString().padStart(2, '0') +
                    ':' +
                    newSeconds.toString().padStart(2, '0');

                return updatedTime;
            });
        };

        if (isRunning) {
            // Update the clock every second
            intervalId = setInterval(updateClock, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const handleStartStopClick = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    return (
        <div>
            <span id="clock"><span id="clock-text">{initialTime}</span></span>
            &nbsp;&nbsp;
            <button onClick={handleStartStopClick} id='pause-start-button'>{isRunning ? 'Stop' : 'Start'}</button>
        </div>
    );
};

export default DigitalClock;
