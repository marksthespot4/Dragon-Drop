import {GET_ERRORS} from "../actions/types";

const initialState = {};

/* Mark's comments
This is to set state of our errors when a GET_ERRORS dispatch is sent.
its not really used i dont think.
 */

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}