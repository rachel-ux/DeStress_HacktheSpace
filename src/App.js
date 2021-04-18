import React from "react";
import Chatbot from 'react-chatbot-kit';
import Home from './components/pages/Home';
import './App.css';
import Routes from './components/Routes';
import { render } from "@testing-library/react";
import { Router, Switch, Route,Link } from "react-router-dom";
import history from "../src/components/history";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import About from "./components/pages/About";
import FindResources from "./components/pages/FindResources";
import Profile from "./components/pages/Profile";
import Counsellors from "./components/pages/Counsellors";
import SelfCareQuiz from "../src/components/pages/SelfCareQuiz";
import ModProfile from "./components/pages/ModProfile";
import ContactMod from"./components/pages/ContactMod";
import Support from "./components/pages/Support";
import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import config from './components/config';


class App extends React.Component {
  
  
 render(){
   
  return (
    <div className="App">
       <header>
        <div id="nav-bar">
        
        <Link to='/' id="logo">DeStress</Link>
          <ul type="none">
            <li class="nav-items">
              <Link to='/about'>About</Link>
            </li>
            <li class="nav-items"> 
              <Link to='/counselors'>Find Counselors</Link>
            </li>
            <li class="nav-items">
              <a href=" #">Refer a Helpline</a>
            </li>
            <li class="nav-items">
            <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </header>
      <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/about" component = {About}/>
          <Route exact path="/findresources" component={FindResources}/>
          <Route exact path ="/counselors" component={Counsellors} />
          <Route exact path="/quiz" component={SelfCareQuiz}/>
          <Route exact path="/counselors/reach" component={ModProfile}/>
          <Route exact path="/counselors/reach/contact" component={ContactMod}/>
          <Route exact path="/support" component={Support}/>
       </Switch>

    </div>
  );
 }
}

export default App;