import Dialogs from "./Dialogs";
import { sendMessageActCreater, updateNewMessageBodyActCreater } from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

// const DialogsContainer = connect(mapStateToProps, {
//     updateNewMessageBody: updateNewMessageBodyActCreater,
//     sendMessage: sendMessageActCreater
// })(withAuthRedirect(Dialogs));

// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, {
        updateNewMessageBody: updateNewMessageBodyActCreater,
        sendMessage: sendMessageActCreater
    }),
    withAuthRedirect
)(Dialogs)