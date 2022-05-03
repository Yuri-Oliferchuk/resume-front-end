import { infoAPI } from "../api/api";
import { checkAuthorization, jwtAccessTokenSet, jwtTokenSet, userlogout } from "./auth-reducer";
import { loadingToggle } from "./config-reducer";
import Cookies from "universal-cookie";
import { stopSubmit } from "redux-form";
import { compareTokens } from "../utils/compareTokens";

const cookies = new Cookies();

const GET_USER_INFO = "info/GET_USER_INFO";

//initial state
let initialState = {
  user: {
    name: null,
    profession: null,
    text: null,
    contacts: null,
    photoUrl: "",
  },
};

//create reducer
const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        user: action.data,
      };

    default:
      return state;
  }
};

//create ction creator
export const getUserInfoSuccess = (data) => ({ type: GET_USER_INFO, data });

// create thunk creator
export const getUserData =
  (lang = sessionStorage.getItem("_lang") || "eng", token = undefined) =>
  async (dispatch) => {
    dispatch(loadingToggle(true));

    const tokenFromCookie = cookies.get("MYACC");
    if (token !== tokenFromCookie) {
      dispatch(jwtTokenSet(tokenFromCookie));
      dispatch(checkAuthorization());
    }
    const response = await infoAPI.getInfo(lang.toLowerCase());
    const { name, profession, text, contacts, photoUrl } = response.data;
    const dataObject = { name, profession, text, contacts, photoUrl };
    dispatch(getUserInfoSuccess(dataObject));

    dispatch(loadingToggle(false));
  };

export const postUserData = (data) => async (dispatch) => {
  let token = await compareTokens();
  if (!token) dispatch(userlogout());
  else {
    dispatch(jwtAccessTokenSet(token));

    const response = await infoAPI.postInfo(data);
    if (response.data.statusCode === 0) {
      const { name, profession, text, contacts, photoUrl } = response.data.data;
      const dataObject = { name, profession, text, contacts, photoUrl };
      dispatch(getUserInfoSuccess(dataObject));
      dispatch(stopSubmit("edit", { _error: response.data.message }));
    } else {
      dispatch(stopSubmit("edit", { _error: response.data.message }));
    }
  }
};

export default infoReducer;
