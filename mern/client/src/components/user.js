import axios from "axios";
import { Component } from "react";

class User extends Component{
    constructor(props) {
        super(props);
        
        this.email = "";
        this.password = "";

        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.uploadUser = this.uploadUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);
    }

    updateEmail(newEmail){
        this.email = newEmail;
    }

    updatePassword(newPassword) {
        this.password = newPassword;
    }

    uploadUser(){
        const newperson = {
            email: this.email,
            password: this.password,
        };

        axios
            .post("http://localhost:5000/record/add", newperson)
            .then((res) => console.log(res.data));
    }

    updateUser(id){
        const newEditedPerson = {
            email: this.email,
            password: this.password,
        }

        axios
            .post(
            "http://localhost:5000/update/" + id,
            newEditedPerson
            )
            .then((res) => console.log(res.data));
    }

    getEmail(id){
        var email;
        axios
            .get("http://localhost:5000/record/" + id)
            .then((response) => {
                email = response.data.email;
            })
            .catch(function (error) {
                console.log(error);
            });
        return email;
    }

    getPassword(id){
        var password;
        axios
            .get("http://localhost:5000/record/" + id)
            .then((response) => {
                password = response.data.password;
            })
            .catch(function (error) {
                console.log(error);
            });
        return password;
    }

    render() {
        return null;
    }
}
export default User;