import {updatePostActionCreater, addPostActionCreater } from '../../redux/profile-reducer'
import MainPage from './MainPage'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postData: state.mainPage.postData,
        areaValue: state.mainPage.currentTextPost,
        profileData: state.mainPage.profileData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            dispatch(updatePostActionCreater(text));
        },
        addPost: () => {
            dispatch(addPostActionCreater());
        }
    }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);


export default MainPageContainer;