import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { studentContext } from "../App";

function LoginForm({ }) {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [studentData, setStudentData] = useContext(studentContext);

  const navigate = useNavigate();
  const [loginToggle, setLoginToggle] = useState(false);
  const [user, setUser] = useState({ email: "", password: ""})
  // const [user, setUser] = useState({ email: "", password: "" });
  // const [student, setStudent] = useState({ email: "", password: "" });
  const [error, setError] = useState(false)

  // const adminInput = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const studentInput = (e) => {
  //   setStudent({ ...student, [e.target.name]: e.target.value });
  // }

  const userInput = (e) => {
    
  }

  const adminLogin = () => {
    if (user.email == adminUser.email &&
      user.password == adminUser.password ) {
      navigate("/issuedbooks")
      console.log("Logged in");
      toast.success("Login successfully" ,{position:"top-center"})
      
    } else {
      setError(true)
      toast.error("Incorrect email or password", { position:"top-center" })
      console.log("Incorrect email or password")
    }
  };

  const studentLogin = () => {
    // console.log("func check")
    studentData.find((item) => {
      // console.log("find check")
      console.log(item.email)
      console.log(user.email)
      if (item.email == user.email && item.password == user.password) {
        navigate("/my-books")
        console.log("student login successfull")
        toast.success("Login successfully" ,{position:"top-center"})
      }
      else {
        console.log("incorrect email or password")
        toast.error("Incorrect Email or password", {position:"top-center" })
      }
    })
  }

  const loginAction = (e) => {
    e.preventDefault();
    if (!loginToggle) {
      adminLogin()
    } else if (loginToggle) {
      studentLoginAction()
    }
    else {
      setError(true)
    }
  };

  const studentLoginAction = () => {
    studentLogin()
  }


  const adminTab = () => {
    setLoginToggle(false);
  };

  const studentTab = () => {
    setLoginToggle(true);
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
          <div className="toggle-btn d-flex gap-md-3 border-bottom">
            <Button
              variant=""
              className="admin-toggle-btn"
              style={{
                borderBottom: !loginToggle ? "3px solid #ED7966" : "none",
              }}
              onClick={() => {
                adminTab();
              }}
            >
              Admin
            </Button>
            <Button
              variant=" "
              className="std-toggle-btn"
              style={{
                borderBottom: loginToggle ? "3px solid #ED7966" : "none",
              }}
              onClick={() => {
                studentTab();
              }}
            >
              Student
            </Button>
          </div>
        </div>
        <div className="login">
          <div id="admin">
            <Form
              className="login-form align-items-center mt-2 "
              onSubmit={loginAction}
            >
              <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                <Form.Label className="login-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ color: "#A3A3A3" }}
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({...user, email: e.target.value})} 
                  // onChange={loginToggle ? studentInput :  adminInput}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="login-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={user.password}
                  onChange={(e)=>setUser({...user, password:e.target.value})}
                  // onChange={loginToggle ? studentInput :  adminInput} 
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <Button
                variant=""
                className="login-btn text-white"
                type="submit"
                // onClick={loginToggle ? stdLoginAction : loginAction}
              >
                Login
              </Button>
              {loginToggle && (
                <div className="signup-txt d-flex justify-content-center mt-3">
                  <p id="reg-txt">
                    Don't have an account? <span id="reg-link">Register</span>
                  </p>
                </div>
              )}
            </Form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
