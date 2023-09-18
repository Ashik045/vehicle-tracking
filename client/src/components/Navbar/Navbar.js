import React, { useState } from 'react';
import { FaAlignLeft, FaBell } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import sass file
import { MdClose, MdDashboard, MdTableChart } from "react-icons/md";
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
                        <MdClose className="menu_icon" onClick={handleToggle} size={24}  />
                    ) : (
                        <FaAlignLeft className="menu_icon" onClick={handleToggle} />
                    )}
                   
                </div>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h3 className="text_none">Dashboard</h3>
                    </Link>
                

                <div className="item_lists">
                    
                    <div className="item">
                        <FaBell className="item_icon" />
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
                                    
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <li>
                                            <MdDashboard className="icon" /> Dashboard
                                        </li>
                                    </Link>
                                    <Link to="/vehicles" style={{ textDecoration: 'none' }}>
                                        <li>
                                            <MdTableChart className="icon" /> Vehicles
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