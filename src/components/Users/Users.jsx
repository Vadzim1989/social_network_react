import React from "react";
import style from './Users.module.css';
import userPhoto from '../../assets/images/ava_img.png';
import { NavLink } from 'react-router-dom';
// import { userAPI } from './../../api/api';



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for(let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
                <div className={style.pagination}>
                    {
                        pages.map( p => {
                            return <span key={p.key} className={props.currentPage === p && style.selectedPage}
                            onClick={ (e) => {props.onPageChanged(p)} }>{p}</span>
                        })
                    }
                </div>
            {
                props.users.map( u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small ? u.photos.small : userPhoto} alt="ava" className={style.photo}/>
                                    </NavLink>                                    
                                </div>
                                <div>
                                    {u.followed 
                                        ? <button 
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                            props.unfollow(u.id)
                                        }                                            
                                        }>unfollow</button> 
                                        : <button 
                                            disabled={props.followingInProgress.some(id => id === u.id)} 
                                            onClick={() => {
                                            props.follow(u.id)
                                        }
                                        }>follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{'u.location.city'}</div>
                                    <div>{'u.location.country'}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
        
    )
}

export default Users;