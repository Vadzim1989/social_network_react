import React from "react";
import c from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={c.header}>
            <img src='https://png.pngtree.com/png-clipart/20240613/original/pngtree-lion-head-face-logo-silhouette-black-icon-tattoo-mascot-hand-drawn-png-image_15317165.png' alt='lion'/>
            <div className={c.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;