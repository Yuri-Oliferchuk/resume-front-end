import { authAPI } from "../api/api";
import Cookies from "universal-cookie";
import { stopSubmit } from "redux-form";
import { compareTokens } from "../utils/compareTokens";

const cookies = new Cookies();

const CHECK_IS_USER_AUTHORIZED = "auth/CHECK_IS_USER_AUTHORIZED";
const LOGOUT = "auth/LOGOUT";
const SET_TOKEN = "auth/SET_TOKEN";
const SET_ACCESS_TOKEN = "auth/SET_ACCESS_TOKEN";

let initialState = {
  isAuth: false,
  token: undefined,
  refreshToken: undefined,
  user: {
    username: "",
    email: "",
    superuser: false,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IS_USER_AUTHORIZED:
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: { username: "", email: "", superuser: false },
        isAuth: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
        refreshToken: action.refreshToken,
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export const userIsAuthorized = (user) => ({ type: CHECK_IS_USER_AUTHORIZED, user });
export const jwtTokenSet = (token, refreshToken) => ({ type: SET_TOKEN, token, refreshToken });
export const jwtAccessTokenSet = (token) => ({ type: SET_ACCESS_TOKEN, token });
export const userlogout = () => ({ type: LOGOUT });

export const checkAuthorization = () => async (dispatch) => {
  let token = await compareTokens();
  if (!token) dispatch(userlogout());
  else {
    dispatch(jwtAccessTokenSet(token));

    const response = await authAPI.checkAuthorisation(token);
    if (response.data.statusCode === 0) {
      dispatch(userIsAuthorized(response.data.user));
    }
  }
};

export const login = (data) => async (dispatch) => {
  const response = await authAPI.login(data);
  if (response.data.statusCode === 0) {
    dispatch(userIsAuthorized(response.data.user));
    dispatch(jwtTokenSet(response.data.accessToken, response.data.refreshToken));
    cookies.set("MYACC", response.data.accessToken, { path: "/" });
    cookies.set("MYREF", response.data.refreshToken, { path: "/" });
  } else {
    const message = response.data.message.length > 0 ? response.data.message : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const signup = (data) => async (dispatch) => {
  const response = await authAPI.signup(data);
  if (response.data.statusCode === 0) {
    dispatch(login(response.data.user));
  } else {
    const message = response.data.message.length > 0 ? response.data.message : "Some error";
    dispatch(stopSubmit("signup", { _error: message }));
  }
};

export const logout = (data) => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.statusCode === 0) {
    dispatch(userlogout());
    cookies.remove("MYACC");
    cookies.remove("MYREF");
    cookies.remove("sid");
  }
};

export default authReducer;
