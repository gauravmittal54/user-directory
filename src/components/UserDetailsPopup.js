// UserDetailsPopup.js
import React from 'react';

const UserDetailsPopup = ({ userDetails, onClose }) => {
    if (!userDetails) {
        return null;
    }

    return (
        <div className="user-details-popup">
            {/* Display user details here */}
            <h2>{userDetails.name}</h2>
            {/* Add other details as needed */}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default UserDetailsPopup;
