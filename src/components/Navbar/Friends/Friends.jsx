import s from './Friends.module.css';
import Friend from "./Friend/Friend";
import React from "react";

const Friends = (props) => {

    let friendElements = props.friends.map(f => <Friend name={f.name} />);

    return (
        <div>
            Friends
            <div className={s.friends}>
                {friendElements}
                </div>
            </div>

    );
}
export default Friends;

