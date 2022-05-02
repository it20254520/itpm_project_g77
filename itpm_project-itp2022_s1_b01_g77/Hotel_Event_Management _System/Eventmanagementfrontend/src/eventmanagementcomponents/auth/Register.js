import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import ErrorMsg from "../ErrorMsg";
import axios from "axios";
import { Button } from "react-bootstrap";

const Register = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    cnumber: "",
    password: "",
    passwordAgain: "",
  });
  const [errorMsg, setErrorMsg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        name: user.name,
        username: user.username,
        email: user.email,
        cnumber: user.cnumber,
        password: user.password,
      };

      if (user.password !== user.passwordAgain) {
        setErrorMsg("Enter the same password twice!");
        return;
      } else {
        console.log(newUser);
      }
      await axios.post("/api/users/register", newUser);

      const loginResponse = await axios.post("/api/users/login", newUser);
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);

      setUser({
        name: "",
        username: "",
        email: "",
        cnumber: "",
        password: "",
        passwordAgain: "",
      });

      window.location = "/";
    } catch (err) {
      err.response.data.msg
        ? setErrorMsg(err.response.data.msg)
        : setErrorMsg("We have some error!");
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
      <div class="w3-panel w3-card" style={{height:"470px", width:"820px", marginLeft:"auto", marginRight:"auto", background:"#adad85"}}>
      <div style={{marginTop:"10px", textAlign:"center"}}>
      <h1>REGISTER HERE</h1>
      <br/>
      {errorMsg && <ErrorMsg msg={errorMsg} />}

      <form onSubmit={handleSubmit}>
        <div style={{float:"left", width:"50%"}}>
        <input
          type="text"
          style={{marginBottom:"20px", width:"340px"}}
          name="name"
          value={user.name}
          placeholder="Name"
          required
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          style={{marginBottom:"20px", width:"340px"}}
          name="username"
          value={user.username}
          placeholder="Username"
          required
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          style={{marginBottom:"20px", width:"340px"}}
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          value={user.email}
          placeholder="Email  (example@gmail.com)"
          required
          onChange={handleChange}
        />
        <br /></div>
        <div style={{float:"left", width:"50%"}}>
        <input
          type="tel"
          style={{marginBottom:"20px", marginLeft:"10px", width:"340px"}}
          pattern="[0]{1}[0-9]{9}"
          name="cnumber"
          value={user.cnumber}
          placeholder="Contact Number  (0XX XXXXXXX)"
          required
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          style={{marginBottom:"20px", marginLeft:"10px", width:"340px"}}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          style={{marginBottom:"20px", marginLeft:"10px", width:"340px"}}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          name="passwordAgain"
          value={user.passwordAgain}
          placeholder="Password Again"
          onChange={handleChange}
        />
        <br />
        </div>
        <p style={{color:"#00802b"}}><i>Password should minimum 8 characters</i></p>
        <p style={{color:"#00802b"}}><i>Using capital, simple letters and numbers</i></p>
        <Button variant="primary" type="submit" style={{width:"200px"}}>Register</Button>
        
      </form>
    </div>
    </div>
    </div>
  );
};

export default Register;
