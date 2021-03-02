import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStatetoProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchtoProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}
const DialogsContainer = connect(mapStatetoProps, mapDispatchtoProps) (Dialogs);

export default DialogsContainer;