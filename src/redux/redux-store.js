import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from "./usersReducer";
import authReducer from './auth-reducer';
import {thunk as thunkMiddleware} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";
import { compose } from "redux";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;