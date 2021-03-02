import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/Profile" activeClassName={s.activelink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" activeClassName={s.activelink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" activeClassName={s.activelink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" activeClassName={s.activelink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" activeClassName={s.activelink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activelink}>Users</NavLink>
            </div>

        </nav>
    );
}
export default Navbar;

