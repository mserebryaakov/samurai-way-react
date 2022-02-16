import { updatePostText, addPost } from '../../redux/profile-reducer'
import MainPage from './MainPage'
import { connect } from 'react-redux';
import React from 'react'
import Post from './Post/Post'

class MainPageAPIContainer extends React.Component {

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
                areaValue={this.props.areaValue}/>
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

const MainPageContainer = connect(mapStateToProps, 
    {
        updatePostText,
        addPost
    }
    )(MainPageAPIContainer);


export default MainPageContainer;