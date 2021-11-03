import axios from "axios";
/*
Mark's comments
This will add authorization tokens to every request appropriately.
 */
const setAuthToken = token => {
    if (token) {
        //Apply authorization token to every request if logged in.
        axios.defaults.headers.common["Authorization"] = token;
    }
    else {
        //Delete auth header.
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;