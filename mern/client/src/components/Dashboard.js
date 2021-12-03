import React, {Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { logoutUser } from "../actions/authActions";
import Button from "react-bootstrap/Button";
import logo from "../imgs/dragonNoText.png";
// import Modal from "react-bootstrap/Modal";
// import CloseButton from "react-bootstrap/CloseButton";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
import { getUserID } from "./user";

/* MARK'S COMMENTS
This file is the "logout" page, called dashboard because
that's what it was called in the tutorial.
Currently it is just a copy of the homepage with the login / register
replaced with a logout button.
The logoutUser function is imported from REDUX using the
"export default connect", which connects this component to the
redux store. There, it maps the state of "auth" and "err" to props that
our Dashboard can use, as seen on line 32.
 */
class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            background: true
        }
    }

    theme(id) {
        if(this.props.auth.isAuthenticated)
        {
            getUserID(id).then(data=>{
                this.setState({background: data.theme})
            });
        }
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const {user} = this.props.auth;
        // console.log(user.id);
        // this.theme(user.id);

        // document.body.style = this.state.background ? "background: wheat;" : "background: slategray;";

        return (
            <div className="Home" style={{height: "90vh"}}>
                <div align="right">
                    <Button onClick={this.onLogoutClick}>
                        Log Out
                    </Button>
                </div>

                <div className="homepage" align="center">
                    <img src={logo}/>
                    <span className="overlay-text">Welcome to Dragon Drop</span>
                </div>

            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {logoutUser}
) (Dashboard);