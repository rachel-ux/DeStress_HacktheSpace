import React, { useRef, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import img2 from "./img2.jpg";
import MainCarousel from "../MainCarousel";
import { Switch, Route, Router, Link } from "react-router-dom";
import history from "../history";
import AuthService from "../../services/auth.service";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import { withRouter } from "react-router-dom";
import Chatbot from 'react-chatbot-kit';
import FindResources from "../pages/FindResources";
import ActionProvider from '../ActionProvider';
import MessageParser from '../MessageParser';
import config from '../config';

const Home = () => {
  const [showBot, toggleBot] = useState(false);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  const ele = useRef(null);

  return (
    <div>
  
        <div id = "chat-bot">
         {showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            saveMessages={saveMessages}
          />
        )}
        <button id = "chat-btn" onClick={() => toggleBot((prev) => !prev)}>Click to chat with us!</button>
</div>
      <div class="margin-container">
        <div id="main-parent">
          <div id="main-text">
            <div class="typewrite-text">
              You are{" "}
              <p class="header-sub-title" id="changing-text" ref={ele}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("Impeccable")
                      .pauseFor(2000)
                      .deleteAll()
                      .pauseFor(2000)
                      .typeString("Amazing")
                      .pauseFor(2000)
                      .deleteAll()
                      .pauseFor(2000)
                      .typeString("Enough.")
                      .pauseFor(2000)
                      .start();
                  }}
                />
              </p>
            </div>
            <p class="main-content">
              It can be intimidating to find support for your mental health, and
              we are here to make it easier. We offer a curated list of
              inclusive and supportive resources that you can choose from, to
              care for your mental health with ease.{" "}
            </p>
          </div>
          <img src={img2} height="400px" width="400px" alt="mental-health" />
        </div>
        <div id="card-parent">
          <div class="card-item" id="card-1">
            <div class="card-text-1">Mental Health Counsellors</div>
            <p class="card-text-2">
              Looking to reach out to a professional? Our curated list of
              counsellors have private practices near you to guide you
              through your mental health journey.
            </p>
            <Link to="/counsellors" className="main-card-btn">
              View More
            </Link>
          </div>
          <div class="card-item " id="card-2">
            <div class="card-text-1">Support Groups</div>
            <p class="card-text-2">
              A carefully curated list of group therapy gatherings and support
              groups that offer a space for sharing experiences, making
              connections, and providing you support.
            </p>
            <Link to="/support" className="main-card-btn">
              View More
            </Link>
          </div>
          <div class="card-item " id="card-3">
            <div class="card-text-1">Take a Self Care Quiz</div>
            <p class="card-text-2">
              What kind of self-care is right for you? We’re here to tell you
              that this just isn’t true! So take this quiz and work out the
              self-care that’s right for you.
            </p>
            <Link to="/quiz" className="main-card-btn">
              View More
            </Link>
          </div>
        </div>
        <div id="testimonial-container">
          <div class="card-text-1" id="testimonial">
            Testimonials
          </div>
          <MainCarousel />
        </div>
      </div>
      <p id="worth-text">Because your journey inspires us </p>
      <footer>
        <div id="footer-cards">
          <div class="footer-head">
            <p class="footer-head-text">Find Support</p>
            <ul type="none" class="footer-links-parent">
              <li class="footer-link-items">
                <a href="#">Counsellors</a>
              </li>
              <li class="footer-link-items">
                <a href="#">Support Groups</a>
              </li>
              <li class="footer-link-items">
                <a href="#">Helpline</a>
              </li>
              <li class="footer-link-items">
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>

          <div class="footer-head">
            <p class="footer-head-text">Get To Know Us</p>
            <ul type="none" class="footer-links-parent">
              <li class="footer-link-items">
                <a href="#">About Us</a>
              </li>
              <li class="footer-link-items">
                <a href="#">Community Guidelines</a>
              </li>
              <li class="footer-link-items">
                <a href="#">FAQ's</a>
              </li>
            </ul>
          </div>
          <div class="footer-head">
            <p class="footer-head-text">Support Us</p>
            <ul type="none" class="footer-links-parent">
              <li class="footer-link-items">
                <a href="#">Share Your Story</a>
              </li>
              <li class="footer-link-items">
                <a href="#">Volunteer With Us</a>
              </li>
              <li class="footer-link-items">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="footer-link-items">
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="footer-bottom">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">© Copyright 2020</a>
        </div>
      </footer>
    </div>
  );
};

export default withRouter(Home);
