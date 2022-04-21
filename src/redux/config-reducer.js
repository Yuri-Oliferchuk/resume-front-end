const CHANGE_PROJECT_LANGUAGE = 'config/CHANGE_PROJECT_LANGUAGE';

//initial state
let initialState = {
    lang: "ENG",
}

//create reducer
const configReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_PROJECT_LANGUAGE:
            return {
                ...state,
                lang: action.lang,
            }
        
        default: return state;
    }    
}

//create ction creator
export const projectLanguageChanging = (lang) => ({type: CHANGE_PROJECT_LANGUAGE, lang})

//create thunk creator
// export const setAuthorisation = () => async (dispatch) => {
//     const response = await authAPI.setAuth();
//     if (response.data.resultCode === 0) {
//         let { id, login, email } = response.data.data;
//         dispatch(setAuthUserData(id, email, login, true));
//     }
// }

export default configReducer;