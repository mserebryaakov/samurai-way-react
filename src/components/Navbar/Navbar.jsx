import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className={s.nav}>
            <span className={s.profile}>
                <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.a }>Профиль</NavLink>
            </span>
            <span className={s.message}>
                <NavLink to="/message" className = { navData => navData.isActive ? s.active : s.a }>Сообщения</NavLink>
            </span>
            <span className={s.message}>
                <NavLink to="/users" className = { navData => navData.isActive ? s.active : s.a }>Пользователи</NavLink>
            </span>
        </nav>
    );
}

export default Navbar;