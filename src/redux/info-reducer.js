import { infoAPI } from "../api/api";

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
export const getUserData = (lang = 'eng') => async (dispatch) => {
    const response = await infoAPI.getInfo(lang);
    const { name, profession, text, contacts, photoUrl } = response.data;
    const dataObject = {name, profession, text, contacts, photoUrl};
        dispatch(getUserInfoSuccess(dataObject));
}

export default infoReducer;
