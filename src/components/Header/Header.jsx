import s from './Header.module.css'

function Header() {
    return (
        <header className={s.header}>
            <div className={s.name}>Путь самурая</div>
        </header>
    );
}

export default Header;