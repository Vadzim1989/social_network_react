import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hi! Vadim!',
                    likesCount: 12
                },
                {
                    id: 2,
                    message: 'How are you?',
                    likesCount: 11
                },
                {
                    id: 3,
                    message: 'How was your day?',
                    likesCount: 1
                }
            ],
            newPostText: 'beltelecom.by'
        },    
        dialogsPage: {
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
            ],
            newMessageBody: '',
        },
        sitebar: {
            friends: [
                {
                    id: 2,
                    name: 'Tanya'
                },
                {
                    id: 3,
                    name: 'Egor'
                },
            ]
        }
    },
    getState() {
        return this._state;
    }
    ,
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
    _callSubscriber() {
        console.log('state was changed!');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


export default store;