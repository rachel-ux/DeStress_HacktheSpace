import React, { useState, useEffect } from "react";
import '../styling/About.css';

export default class About extends React.Component {
    render(){
      return (
        <div>
          <div class="container-fluid">
            <div class="header">
              <div class="hero">
              <p>In a society where stigma has destroyed all adventure,<br></br> the only adventure left is to destroy that stigma.</p>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="col align-self-right">
              <div class="container">
              <div class="about-content">
              <p><h1>We are TeamByteCode Velocity</h1><br></br>We curate inclusive and supportive resources for you can choose from to care for your mental health with ease. 
              <br></br>You have the right to find an affirmative and non-judgmental space that supports your mental health.
              <br></br>We are here to make this process easier and less intimidating.</p>
              </div>
              </div>
            </div>
          </div>
          <footer>
            <div id="footer-cards">
              <div class="footer-head">
                <p class="footer-head-text">Find Support</p>
                <ul type="none" class="footer-links-parent">
                  <li class="footer-link-items">
                    <a href="#">Counsellors</a>
                  </li>
                  <li class="footer-link-items">
                    < a href="#">Support Groups</a>
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
    }
}
