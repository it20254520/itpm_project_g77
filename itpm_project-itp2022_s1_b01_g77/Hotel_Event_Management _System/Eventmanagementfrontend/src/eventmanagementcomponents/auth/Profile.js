import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import img1 from '../images/userprofile.jpg';

const Profile = () => {

  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
 
  }, []);

  const userDelete = () => {
    axios
      .delete("/api/users/profile", {
        headers: {
          "auth-token": userData.token,
        },
      })
      .then((window.location = "/login"));

    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <div style={{marginLeft:"100px", marginTop:"-1340px"}}>



      <h1 style={{textAlign:"center"}}>USER PROFILE</h1>



<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">

      
    <img src={img1} alt="Avatar" style={{width:"400px", height:"400px", marginTop:"50px"}}/>
    </div>
    <div class="flip-card-back" style={{}}>
    <h2 style={{textAlign:"center", marginTop:"80px"}}><b>WELCOME {userData.user.name}</b></h2>
      <br />
      <h5>
        
        <h2 style={{textAlign:"center"}}><b>User Name:</b> {userData.user.username}</h2>
        <br />
        <h2 style={{textAlign:"center"}}><b>Email:</b> {userData.user.email}</h2>
        <br />
        <h2 style={{textAlign:"center"}}><b>Contact Number:</b> {userData.user.cnumber}</h2>
        <br />
      </h5>
      <h5>
        <h2 style={{textAlign:"center"}}><b>Register Date:</b>
         {userData.user.date.toString().slice(0, 10)}</h2>
      </h5>
      
      <br />
    </div>
  </div>
  <Button className="btn btn-danger" style={{marginLeft:"150px", marginTop:"40px", width:"200px", height:"60px"}} onClick={userDelete}>
        Delete My Profile
      </Button>
</div>
      

     
    </div>
  );
};

export default Profile;