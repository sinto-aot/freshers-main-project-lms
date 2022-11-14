import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AllBooks from "./components/All-books/AllBooks";
import IssuedBooks from "./components/Issued-books/IssuedBooks";
import LoginForm from "./components/LoginForm";
import Student from "./components/Students/Student";

function App() {
  const [auth, setAuth] = useState(false);

  const loginCheck = () => {
    setAuth(true);
  };

  return (
    <div className="">
      {/* {!auth ? (<LoginForm loginCheck={loginCheck} />):(<Student/>)} */}
      {/* <Student/> */}
      {/* <AllBooks /> */}
      {/* <IssuedBooks/> */}
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              !auth ? <LoginForm loginCheck={loginCheck} /> : <IssuedBooks />
            }
          />
          <Route path="/allbooks" element={<AllBooks />} />
          <Route path="/students" element={<Student />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
