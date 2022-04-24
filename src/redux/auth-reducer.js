import { authAPI } from "../api/api";
import Cookies from 'universal-cookie';
import { stopSubmit } from "redux-form";

const cookies = new Cookies();

const CHECK_IS_USER_AUTHORIZED = 'auth/CHECK_IS_USER_AUTHORIZED';
const LOGOUT = 'auth/LOGOUT';
const SET_TOKEN = 'auth/SET_TOKEN';

let initialState = {
    isAuth: false,
    token: undefined,
    user: {
        username: "",
        email: "",
        superuser: false},
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHECK_IS_USER_AUTHORIZED:
            return {
                ...state,
                user: action.user,
                isAuth: true,
            }

        case LOGOUT:
            return {
                ...state,
                user: {username: "", email: "", superuser: false},
                isAuth: false,
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default: return state;
    }    
}




export const userIsAuthorized = (user) => ({type: CHECK_IS_USER_AUTHORIZED, user});
export const jwtTokenSet = (token) => ({type: SET_TOKEN, token});
export const userlogout = () => ({type: LOGOUT});

export const checkAuthorization = (token = undefined) => async (dispatch) => {
    const response = await authAPI.checkAuthorisation(token);
    if (response.data.statusCode === 0) {
        dispatch(userIsAuthorized(response.data.user))
    }
}

export const login = (data) => async (dispatch) => {
    const response = await authAPI.login(data);
    if (response.data.statusCode === 0) {
        dispatch(userIsAuthorized(response.data.user));
        dispatch(jwtTokenSet(response.data.token))
        cookies.set('MYSID', response.data.token, { path: '/', maxAge: 60*60 });
    } else {
        const message = response.data.message.length > 0 
                            ? response.data.message
                            : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = (data) => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.statusCode === 0) {
        dispatch(userlogout())
        cookies.remove('MYSID');
    }
}

export default authReducer;