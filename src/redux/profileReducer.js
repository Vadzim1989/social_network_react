import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

const initialState = {
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
    newPostText: 'beltelecom.by',
    profile: null,
    status: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: state.posts[state.posts.length - 1].id + 1, message: state.newPostText, likesCount: 0}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE: 
            return {
                ...state, profile: action.profile
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActCreater = () => ({type: ADD_POST});
export const updateNewPostTextActCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
        .then(res => dispatch(setUserProfile(res.data)));
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(res => dispatch(setProfileStatus(res.data)))
    }
}

export const setStatus = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        })
    }
}

export default profileReducer;