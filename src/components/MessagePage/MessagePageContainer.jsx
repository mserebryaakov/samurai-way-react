import React from 'react'
import {updateMessageActionCreater, addMessageActionCreater} from '../../redux/dialogs-reducer'
import MessagePage from './MessagePage'

function MessagePageContainer(props) {

    let state = props.store.getState().messagePage;
    
    let updateMessage = (text) => {
        props.store.dispatch(updateMessageActionCreater(text));
    }

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreater());
    }

    return (
        <MessagePage messageData={state.messageData}
        dialogData={state.dialogData}
        updateMessage={updateMessage}
        addMessage={addMessage}
        areaValue={state.currentTextMessage}/>
    );
}

export default MessagePageContainer;