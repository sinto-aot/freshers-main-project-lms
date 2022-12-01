import "./App.css";
import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllBooks from "./components/All-books/AllBooks";
import IssuedBooks from "./components/Issued-books/IssuedBooks";
import LoginForm from "./components/LoginForm";
import Student from "./components/Students/Student";
import ViewStudent from "./components/Students/ViewStudent";
import MyBooks from "./components/Student-dashboard/MyBooks";
import StudentAllBooks from "./components/Student-dashboard/StudentAllBooks";

// Get data from localStorage
// Student data get from localStorage
const getStudentItems = () => {
  let studentList = localStorage.getItem('studentList');
  if (studentList) {
    return JSON.parse(localStorage.getItem('studentList'));
  } else {
    return [];
  }
}

// Book data get from localStorage
const getBookItems = () => {
  let bookList = localStorage.getItem('bookList');
  if (bookList) {
    return JSON.parse(localStorage.getItem('bookList'));
  } else {
    return [];
  }
}

// Issued book data get from localStorage
const getIssuedItems = () => {
  let issuedList = localStorage.getItem('issuedList');
  if (issuedList) {
    return JSON.parse(localStorage.getItem('issuedList'));
  } else {
    return [];
  }
}

// Context creation
const studentContext = createContext();
const bookContext = createContext();
const issueBookContext = createContext();

function App() {
  const [studentData, setStudentData] = useState(getStudentItems());
  const [bookData, setBookData] = useState(getBookItems());
  const [issueBookData, setIssueBookData] = useState(getIssuedItems());
  

// Set data to localStorage
  useEffect(() => {
    localStorage.setItem('studentList', JSON.stringify(studentData))
    localStorage.setItem('bookList', JSON.stringify(bookData))
    localStorage.setItem('issuedList', JSON.stringify(issueBookData))
  }, [studentData,bookData,issueBookData]);

  
  
  // Login authentication
  const [auth, setAuth] = useState(false);
  const [studentAuth, setStudentAuth] = useState(false);

  // Admin Authentication
  const loginCheck = () => {
    setAuth(true);
  };

  // Student Authentication
  const studentCheck = () => {
    setStudentAuth(true)
  }


  return (
    <div className="">
      <issueBookContext.Provider value={[issueBookData, setIssueBookData]}>
        <bookContext.Provider value={[bookData, setBookData]}>
          <studentContext.Provider value={[studentData, setStudentData]}>
            <Router>
              <Routes>
                <Route path="/" exact element={ !auth ? ( <LoginForm loginCheck={loginCheck} studentCheck = {studentCheck} /> ) : ( <IssuedBooks /> )  } />
                <Route path="/my-books" element={!studentAuth ? (<LoginForm studentCheck={studentCheck} />) : (<MyBooks/>)} />
                <Route path="/issuedbooks" element={<IssuedBooks />} />
                <Route path="/allbooks" element={<AllBooks />} />
                <Route path="/students" element={<Student />} />
                <Route path="/view-student/:id" element={<ViewStudent />} />
                
                <Route path="/student-all-books" element={<StudentAllBooks/>}/>
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
