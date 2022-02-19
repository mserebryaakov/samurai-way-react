import { connect } from 'react-redux';
import { updateMessageActionCreater, addMessageActionCreater, setDialogsActionCreater } from '../../redux/dialogs-reducer'
import MessagePage from './MessagePage'
import Dialogs from './Dialogs/Dialogs'
import Message from './Message/Message'
import React from 'react'

class MessagePageAPIContainer extends React.Component {

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
            <MessagePage createDialogElements={this.createDialogElements}
            createMessageElements={this.createMessageElements}
            onUpdateMessage={this.onUpdateMessage}
            areaValue={this.props.areaValue}
            onAddMessage={this.onAddMessage}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        messageData: state.messagePage.messageData,
        dialogData: state.messagePage.dialogData,
        areaValue: state.messagePage.currentTextMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (text) => {
            dispatch(updateMessageActionCreater(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreater());
        },
        setDialogs: (messageData,currentTextMessage,dialogData) => {
            dispatch(setDialogsActionCreater(messageData,currentTextMessage,dialogData));
        }
    }
}

const MessagePageContainer = connect(mapStateToProps, mapDispatchToProps)(MessagePageAPIContainer);

export default MessagePageContainer;