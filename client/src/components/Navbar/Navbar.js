import React, { useState } from 'react';
import { FaAlignLeft, FaBell, FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import sass file
import { MdDashboard, MdTableChart } from "react-icons/md";
import './navbar.scss';

// import images
import admin from '../../images/no-photo.png';

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="navbar">
            <div className="navbar_main">
                <div className="menu_logo">
                    {toggle ? (
                        <FaWindowClose className="menu_icon" onClick={handleToggle} />
                    ) : (
                        <FaAlignLeft className="menu_icon" onClick={handleToggle} />
                    )}

                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h3 className="text_none">Dashboard</h3>
                    </Link>
                </div>
                

                <div className="item_lists">
                    
                    <div className="item">
                        <FaBell className="item_icon" />
                        <span className="badge">1</span>
                    </div>

                    <div className="item">
                        <img className="admin_pic" src={admin} alt="admin" />
                    </div>
                </div>
            </div>

            <div className="res_navbar">
                {toggle && (
                    <div className="res_nav_menu">
                        <div className="res_nav_menuu">
                            <div className="links">
                                <ul>
                                    <p className="spann">Main</p>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <li>
                                            <MdDashboard className="icon" /> Dashboard
                                        </li>
                                    </Link>
                                    <Link to="/products" style={{ textDecoration: 'none' }}>
                                        <li>
                                            <MdTableChart className="icon" /> Products
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;