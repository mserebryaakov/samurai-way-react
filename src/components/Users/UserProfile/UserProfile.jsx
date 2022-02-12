import s from './UserProfile.module.css'

function UserProfile(props) {

    let onFollow = () => {
        let userID = props.state.id;
        props.follow(userID);
    }

    return (
        <div className={s.profile}>
            <div className={s.content}>
                <div>
                    <img className={s.photo} src={props.state.avatar}></img>
                </div>
                <div className={s.profileInfo}>
                    <p className={s.item}>{props.state.name}</p>
                    <p className={s.item}>Подписчиков: {props.state.subscribers}</p>
                    <p className={s.item}>Подписок: {props.state.subscription}</p>
                </div>
            </div>
            <div className={s.divButton}>
                {props.state.followed ? <button className={s.followButton} onClick={onFollow}>Отписаться</button> : <button className={s.followButton} onClick={onFollow}>Подписаться</button>}
            </div>
        </div>
    );
}

export default UserProfile;