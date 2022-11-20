import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm({ loginCheck }) {
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
      loginCheck();
    } else {
      alert("Details do not match");
    }
  };

  const loginAction = (e) => {
    e.preventDefault();
    checkUser();
  };

  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className="container1">
      <div className="logo-container mt-5 ps-5">
        <img src="/img/LMS-logo.png" alt="" />
        <span className="lms-txt ms-3 align-items-center">LMS</span>
      </div>
      <div className="d-flex flex-column login-container  align-items-center ">
        <div className="login-head d-flex flex-column ">
          <p className="login-title  ">Login</p>
          <p className="login-txt">Welcome back! Please enter your details.</p>
          <ul className="nav nav-tabs bloc-tabs">
          <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#admin">
                <div className={toggle === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
                Admin
                </div>
              
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#student">
            <div className={toggle === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
                Student
                </div>
            </a>
          </li>
        </ul>
       
        </div>
        <div className="login">
          
        <div className={toggle === 1 ? "content  active-content" : "content"} id="admin">
          <Form
            className="login-form align-items-center mt-2 "
            onSubmit={loginAction}
          >
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
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
        <div className={toggle === 2 ? "content  active-content" : "content"} id="student">
          {/* <h1>Student Login</h1> */}
        </div>  
          </div>
        
      </div>
    </div>
  );
}

export default LoginForm;
