import s from './../Friends.module.css';


const Friend = (props) => {
    return (
        <div className={s.item}>
            <img src="https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png" alt=""/>
            {props.name}
        </div>

    );
}
export default Friend;

