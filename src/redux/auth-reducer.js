import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}
export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const authMe = () => {
    return (dispatch) => {
     return usersAPI.authMe()
    .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
    }
}

export const login = (email, password, rememberMe) => {

    return (dispatch) => {
        usersAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authMe())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit("login", {_error: "common is wrong"}));
                }
            });
    }
}
export const logout = () => {
    return (dispatch) => {
        usersAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            });
    }
}

export default authReducer;
