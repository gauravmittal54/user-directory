// components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserDetails, fetchPostsByUserId, fetchTimezone } from '../api';
import Navbar from './navbar';
import ProfilePage from './profilePage';
import UserPosts from './userPosts';


const UserProfile = () => {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await fetchUserDetails(userId);
                setUserDetails(data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        const fetchPosts = async () => {
            try {
                const posts = await fetchPostsByUserId(userId);
                setUserPosts(posts);
            } catch (error) {
                console.error('Error fetching user posts:', error);
            }
        };

        const fetchCountries = async () => {
            try {
                const countriesList = await fetchTimezone();
                setCountries(countriesList);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchUserData();
        fetchPosts();
        fetchCountries();
    }, [userId]);

    return (
        <div>
            <Navbar
                handleGoBack={handleGoBack}
                selectedCountry={selectedCountry}
                handleCountryChange={handleCountryChange}
                countries={countries}
            />
            <ProfilePage userDetails={userDetails} />
            <UserPosts userPosts={userPosts} />
        </div>
    );
};

export default UserProfile;
