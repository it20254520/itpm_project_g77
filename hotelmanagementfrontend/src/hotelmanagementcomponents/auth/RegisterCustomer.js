import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import ErrorMsg from "../ErrorMsg";
import axios from "axios";
import { Button } from "react-bootstrap";

const RegisterCustomer = () => {
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
    <div style={{marginTop:"200px", textAlign:"center"}}>
      <h1>Register Here</h1>
      <br/>
      {errorMsg && <ErrorMsg msg={errorMsg} />}

      <form onSubmit={handleSubmit}>
        <label>Name&nbsp; </label>
        <input
          type="text"
          name="name"
          value={user.name}
          required
          onChange={handleChange}
        />
        <br />
        <label>User Name&nbsp; </label>
        <input
          type="text"
          name="username"
          value={user.username}
          required
          onChange={handleChange}
        />
        <br />
        <label>email&nbsp; </label>
        <input
          type="text"
          name="email"
          value={user.email}
          required
          onChange={handleChange}
        />
        <br />
        <label>cnumber&nbsp; </label>
        <input
          type="text"
          name="cnumber"
          value={user.cnumber}
          required
          onChange={handleChange}
        />
        <br />
        <label>Password&nbsp; </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <label>Password Again&nbsp; </label>
        <input
          type="password"
          name="passwordAgain"
          value={user.passwordAgain}
          onChange={handleChange}
        />
        <br />
        <Button variant="primary" type="submit">Register User!</Button>
      </form>
    </div>
  );
};

export default RegisterCustomer;
