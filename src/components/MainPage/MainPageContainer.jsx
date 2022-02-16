import { updatePostText, addPost, setUserProfile } from '../../redux/profile-reducer'
import MainPage from './MainPage'
import { connect } from 'react-redux';
import React from 'react'
import Post from './Post/Post'
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

class MainPageAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
        });
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
                areaValue={this.props.areaValue} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        postData: state.mainPage.postData,
        areaValue: state.mainPage.currentTextPost,
        profileData: state.mainPage.profileData
    }
}

let withUrlDataContainer = withRouter(MainPageAPIContainer);

const MainPageContainer = connect(mapStateToProps,
    {
        updatePostText,
        addPost,
        setUserProfile
    }
)(withUrlDataContainer);


export default MainPageContainer;