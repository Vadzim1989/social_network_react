import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth = true) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

export const authMe = () => async (dispatch) => {
    const res = await authAPI.me();           
    if(res.data.resultCode === 0) {
        let {id, email, login} = res.data.data;
        return dispatch(setAuthUserData(id, email, login, true));
    }
          
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe);    
    if(res.data.resultCode === 0) {
        dispatch(authMe());
    }else {
        const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}));
    }
  
}

export const logout = () => async (dispatch) => {
    const res = await authAPI.logout();
    if(res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;