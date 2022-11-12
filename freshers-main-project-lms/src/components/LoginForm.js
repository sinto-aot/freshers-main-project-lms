import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm({loginCheck}) {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ email: "", password: "" });

  const inputUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const checkUser = () => {
    if (user.email == adminUser.email && user.password == adminUser.password) {
        console.log("Logged in");
        loginCheck()
    } else {
      console.log("Details do not match");
      alert("Details do not match");
    }
  };

  const loginAction = (e) => {
    e.preventDefault();
    checkUser()
  };

  return (
    <div className="container1">
      <div className="logo-container mt-5 ps-5">
        <img src="/img/LMS-logo.png" alt="" />
        <span className="lms-txt ms-3 align-items-center">LMS</span>
      </div>
      <div className="d-flex justify-content-center login-container  align-items-center ">
        <Form
          className="login-form align-items-center mt-2 "
          onSubmit={loginAction}
        >
          <p className="login-head">Login</p>
          <p className="login-txt">Welcome back! Please enter your details.</p>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Student
              </a>
            </li>
          </ul>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              style={{ color: "#A3A3A3" }}
              name="email"
              onChange={inputUser}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={inputUser}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="" className="login-btn text-white" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
