import s from './MessagePage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Message from './Message/Message'

function MessagePage(props) {

    let messageElements = props.state.messageData
        .map(element => <Message text={element.message} />);

    let dialogElements = props.state.dialogData
        .map(element => <Dialogs name={element.name} id={element.id} />)

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