import Preloader from '../../Preloader/Preloader';
import s from './Profile.module.css'
import avatar from '../../../assets/avatar.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHook'

function Profile(props) {
    if (!props.profile) {
        return <Preloader />
    }

    let isAvatarSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoThunkCreator(e.target.files[0]);
        }
    }

    return (
        <div className={s.profile}>
            <div className={s.content}>
                <div>
                    <label>
                        {props.isOwner && <input className={s.inputFile} type={"file"} onChange={isAvatarSelected} />}
                        <img className={s.photo}
                            src={props.profile.photos.large === null ? avatar : props.profile.photos.large}>
                        </img>
                    </label>
                </div>
                <div className={s.profileInfo}>
                    <p className={s.item}>{props.profile.fullName}</p>
                    <p className={s.item}>git: {props.profile.contacts.github}</p>
                    <ProfileStatusWithHooks status={props.status} onChangeStatus={props.onChangeStatus} />
                </div>
            </div>
        </div>
    );
}

export default Profile;