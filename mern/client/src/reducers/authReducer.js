import {
    SET_CURRENT_USER,
    USER_LOADING
} from "../actions/types";

/* Mark's comments
A reducer is basically a redux component that takes in ACTIONS (dispatches),
and sets the redux store STATE. So this takes in actions, and converts them into updating
our state. These are determined by a switch case:
When a dispatch SET_CURRENT_USER is received (sent by authActions.js, line 30),
this reducer handles it by setting the state appropriately.
 */
const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

export default function(state = initialState, action)
{
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
