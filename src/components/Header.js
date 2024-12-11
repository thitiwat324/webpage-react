import React, { useState } from 'react'
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import './Header.css'
import Footer from './Footer';



function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);  
    console.log(click);
    const closeMobileMenu = () => setClick(false);
    
   
   

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="#">Dev <FiCode /></a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href='#container' >ABOUT</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#footer">CONTACT</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#portfolio">PORTFOLIO</a>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header