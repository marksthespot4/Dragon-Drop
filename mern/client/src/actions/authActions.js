import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types"

/* MARK's COMMENTS
So this file is basically like the user.js of our mongoose User schema.
It contains axios calls that call our express routes, as well as dispatches
actions to our Redux reducer in order to set our redux state.
Whenever dispatch is called, it goes to our authReducer or errReducer
and from there that updates redux.

 */
//Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post("http://localhost:5000/routes/users/register", userData)
        .then(res =>
        {
            console.log(userData.email);
            console.log(userData.password);
            history.push("/")
        }) //redirect to create page after register
        .catch (err =>
         dispatch({
             type: GET_ERRORS,
             payload: err.response.data
         })
        );
    console.log("REGISTERED USER");
};

//Login User and get token
export const loginUser = userData => dispatch => {
    axios
        .post("http://localhost:5000/routes/users/login", userData)
        .then(res=> {
            //save to local storage

            //set token to local storage
            const {token} = res.data;
            localStorage.setItem("jwtToken", token);
            //Set token to auth header
            setAuthToken(token);
            //decode token to get user data
            const decoded = jwt_decode(token);
            console.log(decoded);
            //set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
         dispatch({
             type: GET_ERRORS,
             payload: err.response.data
         })
        );
    console.log("ATTEMPTED LOGIN");
};

//set logged in user
export const setCurrentUser = decoded => {
    console.log("SETTING LOGGED IN USER");
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

//user loading
export const setUserLoading = () => {
    console.log("USER LOADING");
    return {
        type: USER_LOADING
    };
};

//log out
export const logoutUser = () => dispatch => {
    //remove token from local storage
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("email");
    //remove auth header for future requests
    setAuthToken(false);
    //set current user to empty object, setting isAuthenticated to false.
    dispatch(setCurrentUser({}));
    console.log("USER LOGGED OUT");
};