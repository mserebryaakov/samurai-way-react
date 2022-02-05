import s from './MainPage.module.css'
import Post from './Post/Post'

function MainPage() {
    return (
        <div className={s.content}>
            <div className={s.profile}>
                <p>Профиль</p>
            </div>
            <div className={s.input}>
                <p>Ввод текста</p>
            </div>
            <div className={s.posts}>
                <Post/>
            </div>
        </div>
    );
}

export default MainPage;