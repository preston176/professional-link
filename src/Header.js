import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';

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

                <HeaderOption title="Home" />
            </div>
        </div>
    )
}

export default Header