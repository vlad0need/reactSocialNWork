import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import userPhoto from "../../../assets/img/user_no_photo.png";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img className={s.wallpaper}
                    src='https://proprikol.ru/wp-content/uploads/2020/03/sinij-czvet-krasivye-kartinki-1.jpg'
                    alt=""/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img className={s.ava} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt=""/>
                ava+description
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}
export default ProfileInfo;

