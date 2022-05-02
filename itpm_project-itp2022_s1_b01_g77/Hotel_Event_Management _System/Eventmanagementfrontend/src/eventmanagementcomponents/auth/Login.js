import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import ErrorMsg from "../ErrorMsg";
import axios from "axios";
import { Button } from "react-bootstrap";


const Login = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        username: user.username,
        password: user.password,
      };

      const loginResponse = await axios.post("/api/users/login", newUser);
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);

      setUser({
        username: "",
        password: "",
      });

      window.location = "/";
    } catch (err) {
      err.response.data.msg
        ? setErrorMsg(err.response.data.msg)
        : setErrorMsg("We have an error!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((oldUser) => {
      return {
        ...oldUser,
        [name]: value,
      };
    });
  };
  

  return (
  
      <div class="w3-container" style={{marginTop:"-1000px"}}>
      <div class="w3-panel w3-card" style={{height:"470px", width:"400px", marginLeft:"auto", marginRight:"auto", background:"#adad85", opacity:"1"}}>
      <div style={{marginTop:"60px", textAlign:"center"}}>
      
      <h1>LOG IN</h1>
      <br />
      {errorMsg && <ErrorMsg msg={errorMsg} />}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={{marginBottom:"20px"}}
          name="username"
          value={user.username}
          placeholder="Username"
          required
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          style={{marginBottom:"20px"}}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <p style={{color:"#002b80"}}><i>Password should minimum 8 characters</i></p>
        <p style={{color:"#002b80"}}><i>Using capital, simple letters and numbers</i></p>
        
        <Button variant="success" type="submit">
          Log In
        </Button>

    
      </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
