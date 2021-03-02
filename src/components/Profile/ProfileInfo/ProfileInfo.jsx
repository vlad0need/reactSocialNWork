import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.wallpaper}
                    src='https://proprikol.ru/wp-content/uploads/2020/03/sinij-czvet-krasivye-kartinki-1.jpg'
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava+description
            </div>
        </div>
    );
}
export default ProfileInfo;

