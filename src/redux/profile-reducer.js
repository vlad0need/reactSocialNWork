import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data));
            });
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        usersAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            });
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        usersAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                dispatch(setStatus(status))
                }});
    }
}
export default profileReducer;