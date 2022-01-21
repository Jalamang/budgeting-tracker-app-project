import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Edit from "../Pages/Edit/Edit";
import Index from "../Pages/Index/Index";
import NavBar from "./NavBar/NavBar";
import Welcome from "../Pages/Welcome/Welcome";
import New from "../Pages/New/New";
import Show from "../Pages/Show/Show";

class ComponentRoute extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route path="/transactions" element={<Index />}></Route>
          <Route path="/transactions/new" element={<New />}></Route>
          <Route path="/transactions/:id" element={<Show />}></Route>
          <Route path="/transactions/:id/edit" element={<Edit />}></Route>
        </Routes>
      </>
    );
  }
}

export default ComponentRoute;
