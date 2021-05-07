import React from 'react';
import s from './users.module.css';
import userPhoto from "../../assets/img/user_no_photo.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
        <div className={s.img}>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                     className={s.userPhoto}/>
            </NavLink>
        </div>
        <div className={s.button}>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              unfollow(user.id);
                          }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              follow(user.id);
                          }}>follow</button>}
        </div>
        <div>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </div>
        <div>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
        </div>

    </div>
}


export default User;