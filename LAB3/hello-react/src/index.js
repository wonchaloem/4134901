import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Car from"./components/Car";
import List from"./components/List";
import Ul from"./components/Ul";
import DataTable from"./components/Table";
import Hook from "./components/Hook";
ReactDOM.render(
  <>
    <DataTable/>
    <Car age="22" eye="black"/>
    <List/>
    <Ul/>
    <Hook/>
  </>,
  document.getElementById("root")
);





