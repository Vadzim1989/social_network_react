import React from "react";
import d from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return(
        <div className={d.dialog}>
            <NavLink className={navData => navData.isActive ? d.active : d.link} to={path}>{props.userName}</NavLink>
        </div>
    )
}

export default DialogItem;