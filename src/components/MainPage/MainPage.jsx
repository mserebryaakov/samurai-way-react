import s from './MainPage.module.css'
import Post from './Post/Post'
import Profile from './Profile/Profile'

function MainPage(props) {

    let postElements = props.state.postData
    .map( element => <Post text={element.textPost} /> )

    return (
        <div className={s.content}>
            <Profile state={props.state.profileData}/>

            <div className={s.inputGrid}>
                <input type="text"></input>
            </div>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MainPage;