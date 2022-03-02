import { updatePostText, addPost, setUserProfileThunkCreator, setUserStatusThunkCreator, changeUserStatusThunkCreator,savePhotoThunkCreator } from '../../redux/profile-reducer'
import MainPage from './MainPage'
import { connect } from 'react-redux';
import React from 'react'
import Post from './Post/Post'
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from '../hoc/withAuthRedirect'
import { compose } from 'redux';

class MainPageAPIContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = this.props.profileId;
        }
        this.props.setUserProfileThunkCreator(userId);
        this.props.setUserStatusThunkCreator(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.refreshProfile();
        }
    }

    createPostElements = () => {
        return (
            this.props.postData
                .map(element => <Post text={element.textPost} key={element.id} />)
        );
    }

    onUpdateText = (e) => {
        let text = e.target.value;
        this.props.updatePostText(text);
    }

    onAddPost = () => {
        this.props.addPost();
    }

    render() {
        return (
            <MainPage onUpdateText={this.onUpdateText}
                onAddPost={this.onAddPost}
                postElements={this.createPostElements}
                profileData={this.props.profileData}
                areaValue={this.props.areaValue}
                status={this.props.status}
                onChangeStatus={this.props.changeUserStatusThunkCreator}
                isOwner={!this.props.match.params.userID}
                savePhotoThunkCreator={this.props.savePhotoThunkCreator} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        postData: state.mainPage.postData,
        areaValue: state.mainPage.currentTextPost,
        profileData: state.mainPage.profileData,
        status: state.mainPage.status,
        profileId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { updatePostText, addPost, setUserProfileThunkCreator,setUserStatusThunkCreator, changeUserStatusThunkCreator, savePhotoThunkCreator }),
    withRouter,
    withAuthRedirect
)(MainPageAPIContainer)