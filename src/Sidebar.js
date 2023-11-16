import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';

function Sidebar() {

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">

                <p className='sidebar__hash'>#</p>
                <p>{topic}</p>
            </div>
        );
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://plus.unsplash.com/premium_photo-1661952525120-a01282212dfc?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user-img" />
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
            <div className="sidebar__bottom">
                <p>Recent</p>

                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    );
}

export default Sidebar;
