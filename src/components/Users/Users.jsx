import React from 'react';
import Paginator from "../common/paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {


    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   pageSize={pageSize} totalUsersCount={totalUsersCount} />
        {
            users.map(u =>  <User key={u.id}
                                 user={u}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow}
                                 unfollow={props.unfollow}/>
            )
        }
    </div>
}


export default Users;