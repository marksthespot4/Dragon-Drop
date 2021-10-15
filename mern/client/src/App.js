import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbarDD";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import MyBuilder from "./dnd/MyBuilder"
import UserPage from "./components/user_page";
import Home from "./components/home";
import EditPage from "./components/edit_page"
import Save from "./components/save";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create-page" component={Save} />
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/user_page">
            <UserPage />
       </Route>
        <Route path="/edit_page">
            <EditPage/>
        </Route>
    </div>
  );
};

export default App;