import React, { useState } from "react";

// We use Route in order to define the different routes of our application
import { Route, render, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser, logoutUser} from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

// We import all the components we need in our app
import Navbar from "./components/navbarDD";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import UserPage from "./components/user_page";
import Home from "./components/home";
import Save from "./components/save";
// import View from "./components/view"
import View from "./dnd/viewPage.js";
import Header from "./components/header";
import Footer from "./components/footer";
import Settings from "./components/settings";
import MyBuilder from "./dnd/MyBuilder"
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Creator_page from "./components/creator_page";
import ForgotPassword from "./components/forgot_password.js";
import Faq from "./components/faq";
// import { getUser } from "./components/user";
import ResetPassword from "./components/resetPassword.js";

/* Mark's comments
  This part up here will check our localStorage token
  and set auth accordingly.
  Down in the actual app, we use a provider from redux to give our store to
  every route in the app. :)

 */
if(localStorage.jwtToken) {
  //set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  console.log(decoded);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser());

    window.location.href = "/";
  }
}

const App = () => {

  const [email, setEmail] = useState("");
  // var test = false;

  // if(email !== "") {
  //   getUser(email).then(data=>{
  //     test = data.theme
  //   });
  // }
  // document.body.style = (test || email === "") ? 'background: wheat;' : 'background: green;';
  document.body.style = 'background: wheat;';
  return (
    <div>
      <Provider store={store}>
      <Header email={email}/>
      {/* <Navbar /> */}
        <Route exact path="/">
          <Home setEmail={setEmail}/>
          <Footer/>
        </Route>
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create-page/:id" component={Save} />
        <Route path="/reset/:token" component={ResetPassword} />
        <Route path="/view-page/:id" component={View} />
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/test" component={MyBuilder}/>
        <Route path="/user_page/:id?">
          <UserPage email = {email}/>
          <Footer/>
        </Route>
        <Route path ="/creator_page">
          <Creator_page/>
          <Footer/>
        </Route>
        <Route path ="/faq">
          <Faq/>
          <Footer/>
        </Route>
        <Route path="/settings">
          <Settings email={email}/>
          <Footer/>
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword/>
          <Footer/>
        </Route>        
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} footer={Footer}/>
          {/* <PrivateRoute exact path="/dashboard">
            <Dashboard/>
            <Footer/>
          </PrivateRoute> */}
        </Switch>
      </Provider>
    </div>
  );
};

export default App;