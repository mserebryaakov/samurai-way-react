import React from 'react'
import {updatePostActionCreater, addPostActionCreater } from '../../redux/profile-reducer'
import MainPage from './MainPage'

function MainPageContainer(props) {
    let state = props.store.getState().mainPage;

    let updatePostText = (text) => {
        props.store.dispatch(updatePostActionCreater(text));
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    }

    return (
        <MainPage updatePostText={updatePostText} 
        addPost={addPost} 
        postData={state.postData} 
        areaValue={state.currentTextPost}
        profileData={state.profileData}/>
    );
}

export default MainPageContainer;