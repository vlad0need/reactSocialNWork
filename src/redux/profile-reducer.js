import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    post: [
        {id: 1, message: 'Hi its my f post', likesCount: 12},
        {id: 2, message: 'How are you myy friend', likesCount: 10},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                post: [...state.post, newPost],

            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, post: state.post.filter(p => p.id != p.postId)}
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getUserProfile(userId)
        dispatch(setUsersProfile(response.data));
    }
}
export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}
export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await usersAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}
export default profileReducer;