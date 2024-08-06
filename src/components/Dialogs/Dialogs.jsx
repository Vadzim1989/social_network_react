import React from "react";
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map( d => <DialogItem key={d.id} userName={d.name} id={d.id}/>);
    let messagesElement = props.messages.map( m => <Message key={m.id} message={m.message}/>);
    let newMessageBody = React.createRef();

    const onSendMessageClick = () => {
        props.sendMessage();
    }
    const onNewMessageChange = () => {
        const text = newMessageBody.current.value;
        props.updateNewMessageBody(text);
    }

    return(
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={d.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange} placeholder="Text your message..." ref={newMessageBody} value={props.newMessageBody}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;