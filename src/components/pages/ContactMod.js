import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "../styling/ModProfile.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MainCarousel from "../MainCarousel";
import { Switch, Route,Router, Link } from "react-router-dom";

const onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };
  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  };

export default function ContactMod (){
    return(
    <div>
        <div class="title">Therapist</div>
        <div>

        </div>
        <div id="testimonial-container">
            <div class="card-text-1" id="testimonial">

            </div>
            <div class="card-text-1">Contact </div>
            <div>
            
            </div>
        
        </div>
        <footer>
            <div id="footer-cards">
                <div class="footer-head">
                    <p class="footer-head-text">Find Support</p>
                    <ul type="none" class="footer-links-parent">
                        <li class="footer-link-items"><a href="#">Counsellors</a></li>
                        <li class="footer-link-items"><a href="#">Support Groups</a></li>
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
    