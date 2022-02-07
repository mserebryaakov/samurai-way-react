import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

function Dialogs(props) {
    return (
        <div className={s.item}>
            <NavLink to={"/message/id" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default Dialogs;