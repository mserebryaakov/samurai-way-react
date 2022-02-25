import Preloader from '../../Preloader/Preloader';
import s from './Profile.module.css'
import avatar from '../../../assets/avatar.jpg'
import ProfileStatusWithHooks from './ProfileStatus'

function Profile(props) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profile}>
            <div className={s.content}>
                <div>
                    <img className={s.photo} src={props.profile.photos.large === null? avatar : props.profile.photos.large}></img>
                </div>
                <div className={s.profileInfo}>
                    <p className={s.item}>{props.profile.fullName}</p>
                    <p className={s.item}>git: {props.profile.contacts.github}</p>
                    <ProfileStatusWithHooks status={props.status} onChangeStatus={props.onChangeStatus}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;