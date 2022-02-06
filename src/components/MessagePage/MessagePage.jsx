import s from './MessagePage.module.css'

function MessagePage() {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <p>Пользователь 1</p>
                <p>Пользователь 2</p>
            </div>

            <div className={s.dialog}>
                <p>Привет</p>
                <p>Как дела?</p>
            </div>
        </div>
    );
}

export default MessagePage;