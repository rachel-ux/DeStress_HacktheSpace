import React from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ImgMediaCard from "../ImgMediaCard.js";
import "../styling/Counselor.css";
  

export default class Counsellors extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counselors: [],
            isLoaded: false
        }
        
    }

    componentDidMount(){
        axios.post("http://localhost:8080/api/auth/getcounselor",{
            username : "admin_005",
            password : "rachel123"
        }).then(
            res =>{
                console.log(res.data);
                const m = res.data;
                //this.state.isLoaded = true;
                this.setState({counselors: m, isLoaded: true});
            }
        )
    }
    /*render(){
        
    }*/
    render(){
        const{counselors} = this.state;
        const isLoaded = this.state.isLoaded;
        const todo = counselors;
        if(!isLoaded){
            return( <div id="preloaderbody" class="preloader-body">
            <div class="preloader">
      <span class="whirly-loader">Loading&#8230</span>
            </div>
          </div>);
        }else{
            return (
            <>
                <Grid container spacing={6}>
                    {
                        counselors.map((item)=>(
                        <Grid item xs={12} sm={6} justify="flex-start">
                            <ImgMediaCard name = {item.name} qualifications = {item.qualifications} city = {item.city}/>
                        </Grid>
                        ))
                    }
                </Grid>
            </>
            );
        }
    }
}
