import React from "react";
import style from './Users.module.css';
import userPhoto from '../../assets/images/ava_img.png';
import { NavLink } from 'react-router-dom';


const User = ({followingInProgress, unfollow, follow, user}) => {
    return (
            <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small ? user.photos.small : userPhoto} alt="ava" className={style.photo}/>
                        </NavLink>                                    
                    </div>
                    <div>
                        {user.followed 
                            ? <button 
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                unfollow(user.id)
                            }                                            
                            }>unfollow</button> 
                            : <button 
                                disabled={followingInProgress.some(id => id === user.id)} 
                                onClick={() => {
                                follow(user.id)
                            }
                            }>follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
            </div>
    )
}

export default User;