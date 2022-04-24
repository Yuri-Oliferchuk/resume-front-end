import { infoAPI } from "../api/api";
import { checkAuthorization, jwtTokenSet } from "./auth-reducer";
import { loadingToggle } from "./config-reducer";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const GET_USER_INFO = 'info/GET_USER_INFO';

//initial state
let initialState = {
    user: {name: null,
        profession: null,
        text: null,
        contacts: null,
        photoUrl: ""},
}

//create reducer
const infoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                user: action.data,
            }
        
        default: return state;
    }    
}

//create ction creator
export const getUserInfoSuccess = (data) => ({type: GET_USER_INFO, data})

// create thunk creator
export const getUserData = (lang = (sessionStorage.getItem('_lang') || 'eng'), token = undefined) => async (dispatch) => {
    dispatch(loadingToggle(true))

    const tokenFromCookie = cookies.get('MYSID');
    if (token !== tokenFromCookie) {
        dispatch(jwtTokenSet(tokenFromCookie));
        dispatch(checkAuthorization(tokenFromCookie));
    }
    const response = await infoAPI.getInfo(lang.toLowerCase());
    const { name, profession, text, contacts, photoUrl } = response.data;
    const dataObject = {name, profession, text, contacts, photoUrl};
    dispatch(getUserInfoSuccess(dataObject));

    dispatch(loadingToggle(false))
}

export default infoReducer;
