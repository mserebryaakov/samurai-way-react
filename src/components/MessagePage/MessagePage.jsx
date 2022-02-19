import s from './MessagePage.module.css'
import React from 'react'

let MessagePage = (props) => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                {props.createDialogElements()}
            </div>

            <div className={s.dialog}>
                {props.createMessageElements()}
                <div>
                    <textarea className={s.inputText} onChange={props.onUpdateMessage} value={props.areaValue}></textarea>
                </div>
                <button className={s.inputButton} onClick={props.onAddMessage}>Отправить</button>
            </div>

        </div>
    );
}

export default MessagePage;