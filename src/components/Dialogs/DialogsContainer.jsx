import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStatetoProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchtoProps = (dispatch) => {
    return{
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStatetoProps, mapDispatchtoProps),
withAuthRedirect,
)(Dialogs);