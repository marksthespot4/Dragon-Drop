import axios from "axios";
//import { Component } from "react";

export function uploadUser(email, password, pagecount) {
    const newuser = {
        email: email,
        password: password,
        pagecount: pagecount,
    }
    axios
        .post("http://localhost:5000/record/users/add", newuser)
        .then((res) => console.log(res.data));
}

export function updateUser(email, password, pagecount, id) {
    const updatedUser = {
        email: email,
        password: password,
        pagecount: pagecount,
    }
    axios
        .post("http://localhost:5000/update/users/" + id, updatedUser)
        .then((res) => console.log(res.data));
}

export function getUser(id) {
        return axios.get("http://localhost:5000/record/users/" + id)
            .then(res => res.data)
            .catch(function (error) {
                console.log(error);
            });
}
