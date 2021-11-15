import axios from "axios";
//import { Component } from "react";

/* Mark's comments
Since I used a mongoose schema, I remade all the routes in a different file.
The routes are now in /server/routes/users.js, and those routes
use Mongoose models. Either way, now the routing call is at
http://localhost:5000/routes/users/... for any user call.
I did not translate all these axios calls in since i replaced some,
but I did update {updateUser, getUserID, getUser} since those are used
in user_page.
 */

export function uploadUser(email, password, pagecount) {
    const newuser = {
        email: email.toLowerCase(),
        password: password,
        pagecount: pagecount,
    }
    axios
        .post("http://localhost:5000/record/users/add", newuser)
        .then((res) => console.log(res.data));
}

export function updateUser(email, password, pagecount) {
    const updatedUser = {
        email: email.toLowerCase(),
        password: password,
        pagecount: pagecount
    }
    axios
        .post("http://localhost:5000/routes/users/update/" + email, updatedUser)
        .then((res) => console.log(res.data));
}

export function updateUserById(email, password, pagecount, id) {
    const updatedUser = {
        email: email.toLowerCase(),
        password: password,
        pagecount: pagecount
    }
    axios
        .post("http://localhost:5000/routes/users/update/id/" + id, updatedUser)
        .then((res) => console.log(res.data));
}


export function getUserID(id) {
        return axios.get("http://localhost:5000/routes/users/get/id/" + id)
            .then(res => res.data)
            .catch(function (error) {
                console.log(error);
            });
}

export function getUser(email) {
    return axios.get("http://localhost:5000/routes/users/get/email/" + email.toLowerCase())
        .then(res => res.data)
        .catch(function (error) {
            console.log(error);
        });
}

export function removeUser(id) {
    axios.delete("http://localhost:5000/delete/users/" +id).then((response) => {
        console.log(response.data);
    });
}
