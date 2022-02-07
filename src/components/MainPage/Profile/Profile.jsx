import s from './Profile.module.css'

function Profile(props) {
    return (
        <div className={s.profile}>
            <p>{props.name}</p>
        </div>
    );
}

export default Profile;