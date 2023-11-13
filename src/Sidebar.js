import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="" alt="user-img" />
                <Avatar className='sidebar__avatar' />
                <h2>Preston Mayieka</h2>
                <h4>Pressym@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">
                        2,222
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar