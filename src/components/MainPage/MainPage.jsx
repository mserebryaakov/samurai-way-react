import s from './MainPage.module.css'
import Post from './Post/Post'
import Profile from './Profile/Profile'
import React from 'react'

function MainPage(props) {

    let postElements = props.postData
        .map(element => <Post text={element.textPost} />)

    let onUpdateText = (e) => {
        let text = e.target.value;
        props.updatePostText(text);
    }

    let onAddPost = () => {
        props.addPost();
    }

    return (
        <div className={s.content}>
            <Profile state={props.profileData} />

            <div className={s.inputGrid}>
                <div>
                    <textarea className={s.inputText} onChange={onUpdateText} value={props.areaValue}></textarea>
                </div>
                <button className={s.inputButton} onClick={onAddPost}>Отправить</button>
            </div>

            {postElements}
        </div>
    );
}

export default MainPage;