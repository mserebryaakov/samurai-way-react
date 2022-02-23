import s from './Header.module.css'

function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.name}>Путь самурая</div>
            {props.isAuth ?
                <div className={s.userName} onClick={ () => {props.logoutThunkCreator()}}>{props.login}</div>
                : <div className={s.userName}>Нет авторизации</div>}
        </header>
    );
}

export default Header;