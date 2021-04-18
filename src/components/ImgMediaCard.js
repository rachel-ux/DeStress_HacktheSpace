import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import ModProfile from '../components/pages/ModProfile';
import {BrowserRouter, Switch,Router,Route,Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="User Image"
            height="340"
            imageUrl="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Favatar-97%2F32%2Favatar-02-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F4878675%2Favatar_profile_user_icon&tbnid=4N6gh5D1c6qiBM&vet=12ahUKEwj-x83a2ITwAhVREysKHTMDDRcQMygEegUIARDLAQ..i&docid=tWnt8uiZZPjV-M&w=512&h=512&q=profile%20user%20image&hl=en&ved=2ahUKEwj-x83a2ITwAhVREysKHTMDDRcQMygEegUIARDLAQ"
            title="User image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             A mental health counselor from {props.city} who practises online and offline
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to= {{
            pathname: '/counselors/reach',
            aboutProps:{
              answer1:"I have experienced the transformative power of deep listening, reflecting, supporting, challenging and witnessing and I knew becoming a Psychotherapist would be my way of paying it forward."
            }
          }}>Learn More</Link>
        </CardActions>
      </Card>
  );
}
