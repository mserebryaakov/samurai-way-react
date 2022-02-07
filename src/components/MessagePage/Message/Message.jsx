import s from './Message.module.css';

function Message(props) {
    return (
        <div className={s.item}>
            <p>{props.text}</p>
        </div>
    );
}

export default Message;