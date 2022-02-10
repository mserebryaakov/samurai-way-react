import s from './MainPage.module.css'
import Post from './Post/Post'
import Profile from './Profile/Profile'
import React from 'react'
import {updatePostActionCreater, addPostActionCreater } from '../../redux/profile-reducer'

function MainPage(props) {

    let postElements = props.state.postData
        .map(element => <Post text={element.textPost} />)

    let updateText = (e) => {
        let text = e.target.value;
        props.dispatch(updatePostActionCreater(text));
    }

    let addPost = () => {
        props.dispatch(addPostActionCreater());
    }
    debugger;
    return (
        <div className={s.content}>
            <Profile state={props.state.profileData} />

            <div className={s.inputGrid}>
                <div>
                    <textarea className={s.inputText} onChange={updateText} value={props.state.currentTextPost}></textarea>
                </div>
                <button className={s.inputButton} onClick={addPost}>Отправить</button>
            </div>

            {postElements}
        </div>
    );
}

export default MainPage;