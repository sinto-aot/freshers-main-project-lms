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

      <div className="btn-group d-flex flex-column justify-content-between mt-4 py-3">
        <Button
          variant=""
          className=" side-btn text-white d-flex justify-content-evenly"
        >
          <img src="/img/issued-books-logo.png" alt="" className="pt-1" />
          <Link to="/" className="text-decoration-none text-white">
            <p className="pe-4  ">Issued Books</p>
          </Link>
        </Button>

        <Button
          variant=""
          className=" side-btn text-white d-flex justify-content-evenly"
        >
          <img src="/img/all-books-logo.png" alt="" className="pt-1 " />
          <Link to="/allbooks" className="text-decoration-none text-white">
            <p className="pe-5 ">All Books</p>
          </Link>
        </Button>
        <Button
          variant=""
          className=" side-btn text-white d-flex justify-content-evenly"
        >
          <img src="/img/students-logo.png" alt="" className="pt-1" />
          <Link to="/students" className="text-decoration-none text-white">
            <p className="pe-5">Students</p>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
