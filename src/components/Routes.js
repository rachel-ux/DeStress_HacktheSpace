import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../components/history";

import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import FindResources from "../components/pages/FindResources";
import Profile from "../components/pages/Profile";
import Counsellors from "../components/pages/Counsellors";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
               
            </Router>
        )
    }
}