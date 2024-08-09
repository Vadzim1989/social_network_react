import React from "react";
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {reduxForm, Field} from 'redux-form'
import { maxLengthCreator } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const DialogsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'message'} component={Textarea} placeholder={'text your message...'} validate={[maxLengthCreator(100)]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({
    form: 'dialogs'
})(DialogsForm)

const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map( d => <DialogItem key={d.id} userName={d.name} id={d.id}/>);
    let messagesElement = props.messages.map( m => <Message key={m.id} message={m.message}/>);

    // const onSendMessageClick = () => {
    //     props.sendMessage();
    // }
    // const onNewMessageChange = (e) => {
    //     const text = e.currentTarget.value;
    //     props.updateNewMessageBody(text);
    // }

    const addNewMessage = (values) => {
        props.sendMessage(values.message);
        values.message = '';
    }

    return(
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElement}
            </div>
            
            <div className={d.messages}>
                <div>{messagesElement}</div>
            </div>
            <div>
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;