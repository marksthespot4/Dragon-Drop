import {combineReducers} from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

/*
This combines our reducers into one nice big one.
 */

export default combineReducers({
    auth: authReducer,
    errors: errorReducer
})