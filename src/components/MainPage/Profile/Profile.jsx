import s from './Profile.module.css'

function Profile(props) {
    return (
        <div className={s.profile}>
            <div className={s.content}>
                <div>
                    <img className={s.photo} src="https://avatars.githubusercontent.com/u/82521656?v=4"></img>
                </div>
                <div className={s.profileInfo}>
                    <p className={s.item}>{props.state.name}</p>
                    <p className={s.item}>Подписчиков: {props.state.subscribers}</p>
                    <p className={s.item}>Подписок: {props.state.subscription}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;