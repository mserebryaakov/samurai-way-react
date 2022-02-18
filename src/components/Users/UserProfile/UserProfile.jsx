import s from './UserProfile.module.css'
import avatar from '../../../assets/avatar.jpg'
import { NavLink } from 'react-router-dom'
import {usersAPI} from '../../../api/api'

function UserProfile(props) {

    let onFollow = () => {
        let userID = props.state.id;
        usersAPI.onFollowRequest(userID).then(data => {
            if (data.resultCode === 0) {
                props.follow(userID);
            }
        });
    }

    let onUnfollow = () => {
        let userID = props.state.id;
        usersAPI.onUnfollowRequest(userID).then(data => {
            if (data.resultCode === 0) {
                props.unfollow(userID);
            }
        });
    }

    return (
        <div className={s.profile}>
            <div className={s.content}>
                <div>
                    <NavLink to={"/profile/" + props.state.id}>
                        <img className={s.photo} src={props.state.photos.large === null ? avatar : props.state.photos.large}></img>
                    </NavLink>

                </div>
                <div className={s.profileInfo}>
                    <p className={s.item}>{props.state.name}</p>
                    <p className={s.item}>Статус: {props.state.status}</p>
                </div>
            </div>
            <div className={s.divButton}>
                {props.state.followed ? <button className={s.followButton} onClick={onUnfollow}>Отписаться</button> : <button className={s.followButton} onClick={onFollow}>Подписаться</button>}
            </div>
        </div>
    );
}

export default UserProfile;