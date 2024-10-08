// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Vadim'
        },
        {
            id: 2,
            name: 'Tanya'
        },
        {
            id: 3,
            name: 'Egor'
        }
    ],
    messages: [
        {
            id: 1,
            message: 'Hi!'
        },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'How was your day?'
        }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        // case UPDATE_NEW_MESSAGE_BODY: 
        //     return {
        //         ...state,
        //         newMessageBody: action.text
        //     }
        case SEND_MESSAGE:
            return {
                ...state,           
                messages: [...state.messages, {id: state.messages[state.messages.length - 1].id + 1, message: action.message}],
            }
        default:
            return state;
    }
}

// export const updateNewMessageBodyActCreater = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, text});
export const sendMessageActCreater = (message) => ({type: SEND_MESSAGE, message});

export default dialogsReducer;