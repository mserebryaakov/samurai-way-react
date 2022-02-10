import s from './MainPage.module.css'
import Post from './Post/Post'
import Profile from './Profile/Profile'
import React from 'react'
import { addPostActionCreater } from '../../redux/profile-reducer'

function MainPage(props) {

    let postElements = props.state.postData
        .map(element => <Post text={element.textPost} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreater(text));
        newPostElement.current.value = '';
    }

    return (
        <div className={s.content}>
            <Profile state={props.state.profileData} />

            <div className={s.inputGrid}>
                <div>
                    <textarea className={s.inputText} ref={newPostElement}></textarea>
                </div>
                <button className={s.inputButton} onClick={addPost}>Отправить</button>
            </div>

            {postElements}
        </div>
    );
}

export default MainPage;