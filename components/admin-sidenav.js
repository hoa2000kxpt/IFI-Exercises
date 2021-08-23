import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import styles from './admin-sidebar.module.css'; // CSS Modules
import { IconContext } from 'react-icons';
import { useSession, signOut } from 'next-auth/client';
import { Button } from 'react-bootstrap';

function AdminSidenav() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    function logoutHandler() {
        // window.location.href = "http://localhost:3000";

        signOut();
    }

    return (
        <>
            <style type="text/css">
                {`
                    .navbar {
                        background: #060b26;
                        height: 80px;
                        display: flex;
                        justify-content: start;
                        align-items: center;
                    }

                    .logout {
                        color: #fff;
                        padding: 10px;
                        margin-left: 30px;
                    }
                    
                    .menu-bars {
                        margin-left: 2rem;
                        font-size: 2rem;
                        background: none;
                        color: #fff;
                    }

                    .menu-bars:hover {
                        color: #1a83ff;
                    }
                    
                    .nav-menu {
                        background: #060b26;
                        width: 250px;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        position: fixed;
                        top: 0;
                        left: -100%;
                        transition: 850ms;
                        z-index: 999;
                    }
                    
                    .nav-menu.active {
                        left: 0;
                        transition: 350ms;
                    }
                    
                    .nav-text {
                        display: flex;
                        justify-content: start;
                        align-items: center;
                        padding: 8px 8px 8px 16px;
                        list-style: none;
                        height: 60px;
                    }
                    
                    .nav-text a {
                        text-decoration: none;
                        color: #f5f5f5;
                        font-size: 18px;
                        width: 95%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        padding: 0 16px;
                    }
                    
                    .nav-text a:hover {
                        background-color: #1a83ff;
                    }
                    
                    .nav-menu-items {
                        width: 100%;
                    }
                    
                    .navbar-toggle {
                        background: #060b26;
                        width: 100%;
                        display: flex;
                        justify-content: start;
                        align-items: center;
                    }
                    
                    .nav-menu-items span {
                        margin-left: 16px;
                    }

                    .navbar-heading {
                        color: #fff;
                        margin-left: 2em;
                        margin-top: 0.5em;
                    }
                `}

            </style>

            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <h3 className="navbar-heading">Admin Page</h3>
                    <Button variant="danger" onClick={logoutHandler} className="logout">Log Out</Button>
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <NavLink to={item.path} activeClassName={styles.active}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>

        </>
    );
}

export default AdminSidenav