
import React from 'react';

const ProfilePage = ({ userDetails }) => {
    return (
        <div>
            <h1 id="profile-heading">Profile Page</h1>
            {userDetails && (
                <div className="user-details-card">
                    <div className="left-section">
                        <p className="name" id="user-name">{userDetails.name}</p>
                        <p className="username-catchphrase" id="user-username-catchphrase">
                            {userDetails.username} | {userDetails.company.catchPhrase}
                        </p>
                    </div>
                    <div className="right-section">
                        <p className="address" id="user-address">
                            {userDetails.address.street}, {userDetails.address.suite}, {userDetails.address.city}, {userDetails.address.zipcode}
                        </p>
                        <p id="user-contact">
                            {userDetails.email} | {userDetails.phone}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
