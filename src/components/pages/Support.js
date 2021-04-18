import React from "react";
import MainCarousel from "../MainCarousel";
import "../styling/Support.css"
const Support = () => {
  return (
    <div>
    <div id = "main-card-header">
    <div className = "support-container">
      <p className="support-text">We'd love to help you</p>
      <div className="link-parent">
        <p className="link-text">
          We curate inclusive and supportive resources for you can choose from
          to care for your mental health with ease. You have the right to find
          an affirmative and non-judgmental space that supports your mental
          health. We are here to make this process easier and less intimidating.
          Join our discord server.
        </p>
        <a href = "https://discord.gg/fTCH8G84"><button id="dc-btn"><span >Join our Discord Server</span></button></a>
        </div>
        </div>
        </div>
      
      <div id="values-container">
      <div class="card-text-1" id="testimonial">
            Testimonials
          </div>
        <MainCarousel />
      </div>
      <div id="reason-parent">
        <p className="support-text" id = "reason-text-1">Why We Do It</p>
        <p className = "link-text">
          We hope to put you at the center of the change. We believe that the
          intimidation, judgment and stigma surrounding mental health can be
          chipped away when people are able to make choices for their mental
          health care by themselves, based on their current needs, in a
          non-threatening community space like ours. 
        </p>
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

export default Support;