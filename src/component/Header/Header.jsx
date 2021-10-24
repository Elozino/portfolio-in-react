import React, { useState } from 'react'
import BrandLogo from './logo1.svg'
import './header.css'
import { FaLightbulb, FaRegLightbulb, FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function Header() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <IconContext.Provider value={{ className: "react-icons" }}>
            <header>
                <a href="./Home.jsx">
                    <img src={BrandLogo} alt="brand-logo" />
                </a>
                <div className="theme" title="Change theme" onClick={handleClick}>
                    {click ? <FaRegLightbulb /> : <FaLightbulb />}
                </div>
                <nav className={click ? "header-nav active" : "header-nav"}>
                    <ul>
                        <li><a href="./Home.jsx">&lt;HOME &#47;&gt;</a></li>
                        <li><a href="./About.jsx">&lt;ABOUT &#47;&gt;</a></li>
                        <li><a href="./Project.jsx">&lt;PROJECT &#47;&gt;</a></li>
                        <li><a href="./Contact.jsx">&lt;CONTACT &#47;&gt;</a></li>
                    </ul>
                </nav>
                <button className="mobile-nav" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </button>
                {/**Edit the icon to use react-icon */}
            </header>
        </IconContext.Provider>
    )
}

export default Header
