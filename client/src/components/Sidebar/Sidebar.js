/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { MdBusAlert, MdDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './sidebar.scss';

function Sidebar() {

    return (
        <div className="sidebar">
            
            <div className="links">
                <ul>
                    
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <MdDashboard className="icon" /> Dashboard
                        </li>
                    </Link>
                    <Link to="/vehicles" style={{ textDecoration: 'none' }}>
                        <li>
                            <MdBusAlert className="icon" /> Vehicles
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;