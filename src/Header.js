import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from "@mui/icons-material/ChatOutlined"
import { Notifications } from '@mui/icons-material';

function Header() {
    return (
        <div className='header'>


            <div className="header__left">
                <img src="" alt="site-logo" />
            </div>

            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>

            <div className="header__right">

                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={Notifications} title="Notifications" />

            </div>
        </div>
    )
}

export default Header