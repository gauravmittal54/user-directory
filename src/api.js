// api.js

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const TIME_API_URL = 'http://worldtimeapi.org/api/timezone';

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchPostsByUserId = async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      const posts = await response.json();
      
      // Convert userId to a number
      const numericUserId = parseInt(userId, 10);
  
      // Filter posts based on userId
      const userPosts = posts.filter(post => post.userId === numericUserId);
  
      return userPosts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${userId}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  };

export const fetchTimezone = async () => {
  try {
    const response = await fetch(TIME_API_URL);
    return await response.json();
  } catch (error) {
    console.error('Error fetching timezone:', error);
    throw error;
  }
};

export const fetchTimezoneDetails = async (country) => {
  try {
    const response = await fetch(`${TIME_API_URL}/${country}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching timezone details:', error);
    throw error;
  }
};
