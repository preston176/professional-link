import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div>
            <h1>Header</h1>

            <div className="header__left">
                <img src="" alt="" />
            </div>

            <div className="header__search">
            {/* icon */}
                <input type="text" />
            </div>

            <div className="header__right"></div>
        </div>
    )
}

export default Header