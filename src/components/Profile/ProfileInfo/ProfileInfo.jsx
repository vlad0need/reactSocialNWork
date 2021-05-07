import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/img/user_no_photo.png";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = ({profile, updateStatus, status}) => {
    if (!profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.ava} src={profile.photos.large != null ? profile.photos.large : userPhoto} alt=""/>
                ava+description
                <ProfileStatusHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    );
}
export default ProfileInfo;

