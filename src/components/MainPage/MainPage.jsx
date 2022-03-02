import s from './MainPage.module.css'
import Profile from './Profile/Profile'
import React from 'react'

let MainPage = (props) => {
    return (
        <div className={s.content}>
            <Profile profile={props.profileData} 
            status={props.status} 
            onChangeStatus={props.onChangeStatus}
            isOwner={props.isOwner}
            savePhotoThunkCreator={props.savePhotoThunkCreator}/>

            <div className={s.inputGrid}>
                <div>
                    <textarea className={s.inputText} onChange={props.onUpdateText} value={props.areaValue}></textarea>
                </div>
                <button className={s.inputButton} onClick={props.onAddPost}>Отправить</button>
            </div>

            {props.postElements()}
        </div>
    );
}

export default MainPage;