import { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllBooks from "./components/All-books/AllBooks";
import IssuedBooks from "./components/Issued-books/IssuedBooks";
import LoginForm from "./components/LoginForm";
import Student from "./components/Students/Student";
import ViewStudent from "./components/Students/ViewStudent";

const studentContext = createContext();
const bookContext = createContext();

function App() {
  const [studentData, setStudentData] = useState([]);
  const [bookData, setBookData] = useState([
    // {
    //   key: 1,
    //   bookTitle: "book 1",
    //   author: "author 1",
    //   language: "lang 1",
    //   totalCopies: "2",
    //   remaining:"7"
    // },
    // {
    //   key: 2,
    //   bookTitle: "book 1",
    //   author: "author 1",
    //   language: "lang 1",
    //   totalCopies: "2",
    //   remaining:"7"
    // },
  ]);
  console.log(bookData)

  const [auth, setAuth] = useState(false);
  const loginCheck = () => {
    setAuth(true);
  };

  return (
    <div className="">
      <bookContext.Provider value={[bookData,setBookData]}>
      <studentContext.Provider value={[studentData,setStudentData]}>
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                !auth ? <LoginForm loginCheck={loginCheck} /> : <IssuedBooks />
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
    </div>
  );
}

export default App;
export { studentContext }
export {bookContext}