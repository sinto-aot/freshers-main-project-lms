import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Student from "./Students/Student";
import AllBooks from "./All-books/AllBooks";
import IssuedBooks from "./Issued-books/IssuedBooks";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container border border-1">
      <Nav defaultActiveKey="/home" className="flex-column">
        <div className="logo-container ps-4 mt-3 d-flex align-items-center">
          <img src="/img/LMS-logo-white.png" alt="" />
          <span className="lms-txt-white ms-3 ">LMS</span>
        </div>
      </Nav>

      <div className="btn-group d-flex flex-column justify-content-between mt-4 py-4 px-3">
        <Link
          to="/issuedbooks"
          className="text-decoration-none text-white side-btn  my-2"
        >
          <button className="btn side-btn  text-white d-flex justify-content-evenly  my-2">
            <img src="/img/issued-books-logo.png" alt="" className="pt-1" />
            Issued Books
          </button>
        </Link>
        <Link
          to="/allbooks"
          className="text-decoration-none text-white side-btn  my-2"
        >
          <button className="btn side-btn  text-white d-flex justify-content-evenly  my-2">
            <img src="/img/all-books-logo.png" alt="" className="pt-1 " />
            All Books
          </button>
        </Link>
        <Link
          to="/students"
          className="text-decoration-none text-white side-btn  my-2"
        >
          <button className="btn side-btn  text-white d-flex justify-content-evenly  my-2">
            <img src="/img/students-logo.png" alt="" className="pt-1 " />
            Students
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
