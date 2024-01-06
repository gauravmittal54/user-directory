import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, fetchUsers } from '../api';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const usersData = await fetchUsers();
          setUsers(usersData);
  
          const postsData = await fetchPosts();
          setPosts(postsData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  

  // Function to get the total number of posts for a specific user
  const getTotalPosts = (userId) => {
    return posts.filter((post) => post.userId === userId).length;
  };

  // Render the user cards with the fetched data
  return (
    <>
      <div className="user-directory">
        <h1 className="directory-heading">User Directory</h1>
        {users.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`} className="user-card">
            <p className="user-name">Name: {user.name}</p>
            <p className="total-posts">Posts: {getTotalPosts(user.id)}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default UserList;
