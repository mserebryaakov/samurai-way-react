import s from './MessagePage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Message from './Message/Message'

let dialogData = [
    {id: 1, name: "Пользователь 1"},
    {id: 2, name: "Пользователь 2"},
    {id: 3, name: "Пользователь 3"}
];

let messageData = [
    {id: 1, message: "Привет"},
    {id: 2, message: "Как дела?"}
];

let messageElements = messageData
    .map( element => <Message text={element.message} /> );

let dialogElements = dialogData
    .map ( element => <Dialogs name={element.name} id={element.id} /> )

function MessagePage() {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>

            <div className={s.dialog}>
                {messageElements}
            </div>
        </div>
    );
}

export default MessagePage;