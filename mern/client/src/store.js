import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"

/* MARK's COMMENTS
This is the store setup for our Redux store. It uses thunk as a middleware, but
more importantly it takes our rootReducer from index.js in reducers,
which imports all our actions and states from authReducer and errorReducer.
 */
const initialState = {};
const middleware = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);
export default store;