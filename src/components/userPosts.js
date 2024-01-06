// components/UserPosts.js
import React from 'react';
import PostCard from './postCard';

const UserPosts = ({ userPosts }) => {
    return (
        <div id="user-posts-container">
            {userPosts.length > 0 ? (
                <div>
                    <h2 id="user-posts-heading">User Posts</h2>
                    <div className="user-posts" id="user-posts-list">
                        {userPosts.map((post) => (
                            <PostCard key={post.id} title={post.title} body={post.body} />
                        ))}
                    </div>
                </div>
            ) : (
                <p className="no-posts-message">No posts available for this user.</p>
            )}
        </div>
    );
};

export default UserPosts;
