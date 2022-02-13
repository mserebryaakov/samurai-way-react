import s from './MessagePage.module.css'
import Dialogs from './Dialogs/Dialogs'
import Message from './Message/Message'
import React from 'react'
import * as axios from 'axios'

class MessagePage extends React.Component {

    componentDidMount() {
        axios.get("http://localhost:8181/users").then(response => {
                this.props.setUsers(response.data.messageData,
                    response.data.currentTextMessage,
                    response.data.dialogData)
            });
    }

    createMessageElements = () => {
        return (
            this.props.messageData
                .map(element => <Message text={element.message} key={element.id} />)
        )
    }

    createDialogElements = () => {
        return (
            this.props.dialogData
                .map(element => <Dialogs name={element.name} id={element.id} key={element.id} />)
        )
    }

    onUpdateMessage = (e) => {
        let text = e.target.value;
        this.props.updateMessage(text)
    }

    onAddMessage = () => {
        this.props.addMessage();
    }

    render() {
        return (
            <div className={s.content}>
                <div className={s.dialogs}>
                    {this.createDialogElements()}
                </div>

                <div className={s.dialog}>
                    {this.createMessageElements()}
                    <div>
                        <textarea className={s.inputText} onChange={this.onUpdateMessage} value={this.props.areaValue}></textarea>
                    </div>
                    <button className={s.inputButton} onClick={this.onAddMessage}>Отправить</button>
                </div>

            </div>
        );
    }
}

export default MessagePage;