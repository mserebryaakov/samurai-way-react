import s from './Header.module.css'

function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.name}>Путь самурая</div>
            {props.isAuth? <div className={s.userName}>{props.login}</div> : <div>Нет авторизации</div>}
        </header>
    );
}

export default Header;