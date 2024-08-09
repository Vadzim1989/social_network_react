import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const DELETE_POST = 'DELETE_POST';

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
    // newPostText: 'beltelecom.by',
    profile: null,
    status: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                // newPostText: '',
                posts: [...state.posts, {id: state.posts[state.posts.length - 1].id + 1, message: action.newPostText, likesCount: 0}]
            }
        // case UPDATE_NEW_POST_TEXT:
        //     return {
        //         ...state,
        //         newPostText: action.text
        //     }
        case SET_USER_PROFILE: 
            return {
                ...state, profile: action.profile
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        default:
            return state;
    }
}

export const addPostActCreater = (newPostText) => ({type: ADD_POST, newPostText});
// export const updateNewPostTextActCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})
export const deletePost = (id) => ({type: DELETE_POST, id})

export const getProfile = (userId) => async (dispatch) => {
    const res = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(res.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const res = await profileAPI.getStatus(userId);
    dispatch(setProfileStatus(res.data))
}

export const setStatus = (status) => async (dispatch) => {
    const res = await profileAPI.setStatus(status);
    if(res.data.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}

export default profileReducer;