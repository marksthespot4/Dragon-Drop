import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import grapesjs from "grapesjs";

import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import CreatePage from "./pages/create-page"
import Home from "./components/home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create" />
      <Route path="/create-page" component={CreatePage}>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
};

export default App;