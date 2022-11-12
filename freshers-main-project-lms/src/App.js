import { useState } from "react";
import "./App.css";
import AllBooks from "./components/AllBooks";
import LoginForm from "./components/LoginForm";
import Student from "./components/Student";

function App() {
  const [auth, setAuth] = useState(false)
  
  const loginCheck = () => {
    setAuth(true)
  }

  return (
    <div className="">
      
      {/* {!auth ? (<LoginForm loginCheck={loginCheck} />):(<Student/>)} */}
      <Student/>
      {/* <AllBooks/> */}
    </div>
  );
}

export default App;
