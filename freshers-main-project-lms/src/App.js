import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllBooks from "./components/All-books/AllBooks";
import IssuedBooks from "./components/Issued-books/IssuedBooks";
import LoginForm from "./components/LoginForm";
import Student from "./components/Students/Student";
import ViewStudent from "./components/Students/ViewStudent";


function App() {
  const [auth, setAuth] = useState(false);

  const loginCheck = () => {
    setAuth(true);
  };

  return (
    <div className="">
     
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              !auth ? <LoginForm loginCheck={loginCheck} /> : <IssuedBooks />
            }
          />
          <Route path="/issuedbooks" element={<IssuedBooks/>} />
          <Route path="/allbooks" element={<AllBooks />} />
          <Route path="/students" element={<Student />} />
          <Route path="/view-student" element={<ViewStudent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
