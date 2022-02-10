import s from './MessagePage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Message from './Message/Message'
import React from 'react'
import {updateMessageActionCreater, addMessageActionCreater} from '../../redux/dialogs-reducer'

function MessagePage(props) {

    let messageElements = props.state.messageData
        .map(element => <Message text={element.message} />);

    let dialogElements = props.state.dialogData
        .map(element => <Dialogs name={element.name} id={element.id} />)
    
    let updateMessage = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageActionCreater(text));
    }

    let addMessage = () => {
        props.dispatch(addMessageActionCreater());
    }

    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>

            <div className={s.dialog}>
                {messageElements}
                <div>
                    <textarea className={s.inputText} onChange={updateMessage} value={props.state.currentTextMessage}></textarea>
                </div>
                <button className={s.inputButton} onClick={addMessage}>Отправить</button>
            </div>

        </div>
    );
}

export default MessagePage;