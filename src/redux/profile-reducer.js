import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    post: [
        {id: 1, message: 'Hi its my f post', likesCount: 12},
        {id: 2, message: 'How are you myy friend', likesCount: 10},
    ],
    newPostText: 'it-kamasutra',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data));
            });
    }
}
export default profileReducer;