import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddelware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import configReducer from "./config-reducer";
import infoReducer from "./info-reducer";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    app: appReducer,
    config: configReducer,
    info: infoReducer,
    auth: authReducer,

    form: formReducer,
});

// let store = createStore(reducers, applyMiddleware(thunkMiddelware));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware( thunkMiddelware )));


window.store = store;
export default store;