import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className={s.nav}>
            <span className={s.profile}>
                <NavLink to="/profile" activeClassName = { s.active }>Профиль</NavLink>
            </span>
            <span className={s.message}>
                <NavLink to="/message" activeClassName = { s.active }>Сообщения</NavLink>
            </span>
            <span className={s.message}>
                <NavLink to="/users" activeClassName = { s.active }>Пользователи</NavLink>
            </span>
        </nav>
    );
}

export default Navbar;