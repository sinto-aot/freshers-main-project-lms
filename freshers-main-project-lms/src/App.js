import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllBooks from "./components/All-books/AllBooks";
import IssuedBooks from "./components/Issued-books/IssuedBooks";
import LoginForm from "./components/LoginForm";
import Student from "./components/Students/Student";
import ViewStudent from "./components/Students/ViewStudent";

const studentContext = createContext();
const bookContext = createContext();
const issueBookContext = createContext();

function App() {
  const [studentData, setStudentData] = useState([]);
  const [bookData, setBookData] = useState([]);
  const [issueBookData, setIssueBookData] = useState([]);
  console.log(bookData);
  

  const [auth, setAuth] = useState(false);
  const loginCheck = () => {
    setAuth(true);
  };

  return (
    <div className="">
      <issueBookContext.Provider value={[issueBookData, setIssueBookData]}>
        <bookContext.Provider value={[bookData, setBookData]}>
          <studentContext.Provider value={[studentData, setStudentData]}>
            <Router>
              <Routes>
                <Route
                  path="/"
                  exact
                  element={
                    !auth ? (
                      <LoginForm loginCheck={loginCheck} />
                    ) : (
                      <IssuedBooks />
                    )
                  }
                />
                <Route path="/issuedbooks" element={<IssuedBooks />} />
                <Route path="/allbooks" element={<AllBooks />} />
                <Route path="/students" element={<Student />} />
                <Route path="/view-student" element={<ViewStudent />} />
              </Routes>
            </Router>
          </studentContext.Provider>
        </bookContext.Provider>
      </issueBookContext.Provider>
    </div>
  );
}

export default App;
export { studentContext };
export { bookContext };
export { issueBookContext };
