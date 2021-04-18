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

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(23),
      color: theme.palette.text.hint,
    },
  }));
  

export default function ModProfile(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log("about",props.location.aboutProps);
  return (
    <div>
      <div class="title">
          Therapist
      </div>
      <div>
        <Grid container>
          <Grid item sm={2}></Grid>
          <Grid item sm={3}>
            <Container sm>
              <img src="data:image/jpeg;base64,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"></img>
            </Container>
          </Grid>
          <Grid item sm={6}>
            <div className={classes.root}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}aria-controls="panel1bh-content" id="panel1bh-header">
                  <Typography className={classes.secondaryHeading}>Why did you choose to become a counsellor</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography></Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}aria-controls="panel1bh-content" id="panel1bh-header">
                  <Typography className={classes.secondaryHeading}>Why did you choose to become a counsellor</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography></Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}aria-controls="panel1bh-content" id="panel1bh-header">
                  <Typography className={classes.secondaryHeading}>Why did you choose to become a counsellor</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography></Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}aria-controls="panel1bh-content" id="panel1bh-header">
                  <Typography className={classes.secondaryHeading}>Why did you choose to become a counsellor</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography></Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </div>
      <div id="testimonial-container">
          <div class="card-text-1" id="testimonial">
          </div>
          <div class="card-text-1">
            Contact 
          </div>
          
         <Link to="/counselors/reach/contact">View More</Link>
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
}
