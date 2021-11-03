import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

/* Mark's comments
Privateroute is a way to protect routes.
This will route either to the component within, or redirect to /,
depending on whether the user is logged in.
 */

const PrivateRoute = ({ component: Component, footer: Footer, auth, ...rest}) =>
    (
        <Route
            {...rest}
            render={props =>
            auth.isAuthenticated === true ? (
                <>
                <Component {...props} />
                <Footer/>
                </>
            ) : (
                <Redirect to="/" />
            )
            }
        />
    );
PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
