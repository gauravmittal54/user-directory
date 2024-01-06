// postCard.js
import React from 'react';

const PostCard = ({ title, body }) => {
    return (
        <div className="post-card">
            <h3 id='past-card-title'>{title}</h3>
            <p id='post-card-body'>{body}</p>
        </div>
    );
};

export default PostCard;
