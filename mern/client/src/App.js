import React, { useState } from "react";

// We use Route in order to define the different routes of our application
import { Route, render } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbarDD";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import MyBuilder from "./dnd/MyBuilder"
import UserPage from "./components/user_page";
import Home from "./components/home";
import Save from "./components/save";
import View from "./components/view"
import Header from "./components/header";
import Footer from "./components/footer";
import Settings from "./components/settings";

const App = () => {

  const [email, setEmail] = useState("");
  // const [page, setPage] = useState("");

  document.body.style = 'background: wheat;';
  return (
    <div>
      <Header/>
      {/* <Navbar /> */}
        <Route exact path="/">
          <Home setEmail={setEmail}/>
          <Footer/>
        </Route>
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create-page/:id" component={Save} />
        <Route path="/view-page/:id" component={View} />
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/test" component={MyBuilder}/>
        <Route path="/user_page">
          <UserPage email={email}/>
          <Footer/>
        </Route>
<<<<<<< HEAD
        <Route path="/edit_page">
          <Edit/>
        </Route>
        <Route path="/settings">
          <Settings/>
          <Footer/>
        </Route>
=======
>>>>>>> 2b59a99016a631689eab520efc551020586b59a7
    </div>
  );
};

export default App;