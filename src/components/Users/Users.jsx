import React from 'react';
import s from './users.module.css';
import userPhoto from "../../assets/img/user_no_photo.png";
import {NavLink} from "react-router-dom";



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= 20; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.setPages}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.user}>
                    <div className={s.img}>
                        <NavLink to={'/profile/' + u.id} >
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                             className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={s.button}>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>followed</button>}
                    </div>
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </div>
            </div>)
        }
    </div>
}


export default Users;