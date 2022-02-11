import s from './MessagePage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Message from './Message/Message'
import React from 'react'

function MessagePage(props) {

    let messageElements = props.messageData
        .map(element => <Message text={element.message} key={element.id}/>);

    let dialogElements = props.dialogData
        .map(element => <Dialogs name={element.name} id={element.id} key={element.id}/>)
    
    let onUpdateMessage = (e) => {
        let text = e.target.value;
        props.updateMessage(text)
    }

    let onAddMessage = () => {
        props.addMessage();
    }

    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>

            <div className={s.dialog}>
                {messageElements}
                <div>
                    <textarea className={s.inputText} onChange={onUpdateMessage} value={props.areaValue}></textarea>
                </div>
                <button className={s.inputButton} onClick={onAddMessage}>Отправить</button>
            </div>

        </div>
    );
}

export default MessagePage;