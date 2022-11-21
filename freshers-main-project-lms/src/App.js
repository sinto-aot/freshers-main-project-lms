import "./App.css";
import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllBooks from "./components/All-books/AllBooks";
import IssuedBooks from "./components/Issued-books/IssuedBooks";
import LoginForm from "./components/LoginForm";
import Student from "./components/Students/Student";
import ViewStudent from "./components/Students/ViewStudent";

// Get data from localStorage
const getStudentItems = () => {
  let studentList = localStorage.getItem('studentList');
  console.log(studentList)
  if (studentList) {
    return JSON.parse(localStorage.getItem('studentList'));
  } else {
    return [];
  }
}

const getBookItems = () => {
  let bookList = localStorage.getItem('bookList');
  console.log(bookList)
  if (bookList) {
    return JSON.parse(localStorage.getItem('bookList'));
  } else {
    return [];
  }
}

const getIssuedtems = () => {
  let issuedList = localStorage.getItem('issuedList');
  console.log(issuedList)
  if (issuedList) {
    return JSON.parse(localStorage.getItem('issuedList'));
  } else {
    return [];
  }
}


const studentContext = createContext();
const bookContext = createContext();
const issueBookContext = createContext();

function App() {
  const [studentData, setStudentData] = useState(getStudentItems());
  const [bookData, setBookData] = useState(getBookItems());
  const [issueBookData, setIssueBookData] = useState(getIssuedtems());
  console.log(bookData);
  

// Add data to localStorage
  useEffect(() => {
    localStorage.setItem('studentList', JSON.stringify(studentData))
    localStorage.setItem('bookList', JSON.stringify(bookData))
    localStorage.setItem('issuedList', JSON.stringify(issueBookData))
  }, [studentData,bookData,issueBookData]);

  
  
  
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
