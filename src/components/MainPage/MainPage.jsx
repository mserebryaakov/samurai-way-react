import s from './MainPage.module.css'
import Post from './Post/Post'
import Profile from './Profile/Profile'

function MainPage(props) {

    let postElements = props.state.postData
    .map( element => <Post text={element.textPost} /> )

    return (
        <div className={s.content}>
            <Profile name="Имя профиля" />

            <div className={s.input}>
                <p>Ввод текста</p>
            </div>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MainPage;