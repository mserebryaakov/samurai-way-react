import { connect } from 'react-redux';
import { updateMessageActionCreater, addMessageActionCreater, setDialogsActionCreater } from '../../redux/dialogs-reducer'
import MessagePage from './MessagePage'

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
        setUsers: (messageData,currentTextMessage,dialogData) => {
            dispatch(setDialogsActionCreater(messageData,currentTextMessage,dialogData));
        }
    }
}

const MessagePageContainer = connect(mapStateToProps, mapDispatchToProps)(MessagePage);

export default MessagePageContainer;