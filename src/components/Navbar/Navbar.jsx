import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.profile}>
                <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.a }>Профиль</NavLink>
            </div>
            <div className={s.message}>
                <NavLink to="/message" className = { navData => navData.isActive ? s.active : s.a }>Сообщения</NavLink>
            </div>
            {/* <div className={s.music}>
                <a>Музыка</a>
            </div>
            <div className={s.settings}>
                <a>Настройки</a>
            </div> */}
        </nav>
    );
}

export default Navbar;