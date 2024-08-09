import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";


const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unfollow, follow}) => {
    return (
        <div>
                <Pagination totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} portionSize={10}/>
            {
                users.map( u => {
                    return (
                        <User key={u.id} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} user={u}/>
                    )
                })
            }
        </div>
        
    )
}

export default Users;