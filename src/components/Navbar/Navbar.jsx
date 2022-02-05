import s from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.profile}>
                <a>Профиль</a>
            </div>
            <div className={s.message}>
                <a>Сообщения</a>
            </div>
            <div className={s.music}>
                <a>Музыка</a>
            </div>
            <div className={s.settings}>
                <a>Настройки</a>
            </div>
        </nav>
    );
}

export default Navbar;