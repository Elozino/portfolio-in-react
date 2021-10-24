import React from 'react'
import BrandLogo from './logo1.svg'
import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <img src={BrandLogo} alt="logo" />
            <p>&copy; All Rights Reserved</p>
            <img src={BrandLogo} alt="logo" />
        </footer>
    )
}

export default Footer
