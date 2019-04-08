import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from 'react-loader-spinner'
import "./App.css";
const $ = window.$;

class App extends Component{
  
  state={
    token:'',
    isLoading:false,
    isHome:true
  }
  
  componentDidMount=()=>{

    // //check if there is a token in local storage. if there is, check it against database
    // if(localStorage.getItem("course-creator-token")){
    //   let token=localStorage.getItem("course-creator-token");
    //   this.checkToken(token);
    // }
  }

  // checkToken=(token)=>{
  //   this.setState((prevState)=>({
  //     isLoading:true 
  //   }))
  //   API.checkToken(token)
  //   .then(result=>{

  //     $("body").hide()

  //     if(result.data.session){
  //       this.setState((previousState)=>({
  //         token: result.data.session._id,
  //         user:result.data.user,
  //         isLoading:false
  //       }));
  //     }else{
  //       this.setState((previousState)=>({
  //         isLoading:false
  //       }));
  //     }
  //   })
  //   .catch(err=>{
  //     // alert("error! "+err)
  //     // this.setState((previousState)=>({
  //     //   isLoading:false
  //     // }));
  //   })
  // }
  // setSessionToken=(session,userData)=>{
  //     localStorage.setItem('course-creator-token', session._id)      
  //     this.setState((previousState)=>({
  //       token:session,
  //       isLoading:false,
  //       user:userData
  //     }));  
  // }
  // deleteToken=()=>{
  //   let token = localStorage.getItem("course-creator-token");
  //   API.deleteToken(token)
  //   .then(result=>{
  //   })
  //   localStorage.removeItem("course-creator-token")

  //   // alert("about to set state to empty")
  //   this.setState((prevState)=>({
  //     token:'',
  //     user:{}
  //   }))
  //   window.location.replace('/')
  // }

  render(){
    return (
      <h1>This is a boilerplate MERN application</h1>
    );
  }
  
}

export default App;
