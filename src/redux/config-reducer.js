const CHANGE_PROJECT_LANGUAGE = 'config/CHANGE_PROJECT_LANGUAGE';
const LOADING_IN_PROGRES = 'config/LOADING_IN_PROGRES';

//initial state
let initialState = {
    lang: sessionStorage.getItem('_lang') || "ENG",
    isLoading: false,
}

//create reducer
const configReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_PROJECT_LANGUAGE:
            sessionStorage.setItem("_lang", action.lang);
            return {
                ...state,
                lang: action.lang,
            }
            
            case LOADING_IN_PROGRES:
            return {
                ...state,
                isLoading: action.value,
            }
        
        default: return state;
    }    
}

//create ction creator
export const projectLanguageChanging = (lang) => ({type: CHANGE_PROJECT_LANGUAGE, lang})
export const loadingToggle = (value) => ({type: LOADING_IN_PROGRES, value})

//create thunk creator
// export const setAuthorisation = () => async (dispatch) => {
//     const response = await authAPI.setAuth();
//     if (response.data.resultCode === 0) {
//         let { id, login, email } = response.data.data;
//         dispatch(setAuthUserData(id, email, login, true));
//     }
// }

export default configReducer;