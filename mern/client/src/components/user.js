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

    render() {
        return null;
    }
}
export default User;