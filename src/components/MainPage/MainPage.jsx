import s from './MainPage.module.css'
import Post from './Post/Post'
import Profile from './Profile/Profile'

let postData = [
    {id: 1, textPost: "Привет"},
    {id: 2, textPost: "Как дела?"}
];

let postElements = postData
    .map( element => <Post text={element.textPost} /> )

function MainPage() {
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