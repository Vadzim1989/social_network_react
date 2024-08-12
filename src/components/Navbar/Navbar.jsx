import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}><NavLink className={navData => navData.isActive ? c.active : c.item} to="/profile">Profile</NavLink></div>
            <div className={c.item}><NavLink className={navData => navData.isActive ? c.active : c.item} to="/dialogs">Messages</NavLink></div>
            <div className={c.item}><NavLink className={navData => navData.isActive ? c.active : c.item} to="/users">Users</NavLink></div>
        </nav>
    )
}

export default Navbar;