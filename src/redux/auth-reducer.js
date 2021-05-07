import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';


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
export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const authMe = () => async (dispatch) => {
    let response = await usersAPI.authMe();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await usersAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(authMe())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit("login", {_error: "common is wrong"}));
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        let response = await usersAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
}

export default authReducer;
