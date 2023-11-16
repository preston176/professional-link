import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>Preston M</h2>
                    <p>Description</p>
                </div>
            </div>
        </div>
    )
}

export default Post