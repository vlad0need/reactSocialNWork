import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = state.messages.map (m => <Message message= {m.message} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageOnClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea
                    placeholder='Enter Your Message'
                    value={newMessageBody}
                    onChange={onNewMessageChange}></textarea></div>
                <button onClick={onSendMessageOnClick}>Send</button>
            </div>
        </div>

    );
}
export default Dialogs;