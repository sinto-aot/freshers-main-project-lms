import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { MdOutlinePeople, MdLocalLibrary } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { BsBookHalf } from "react-icons/bs";

function Navbar() {
  return (
    <div className="nav-container border border-1">
      <Nav defaultActiveKey="/home" className="flex-column">
        <div className="logo-container ps-4 mt-3 d-flex align-items-center">
          <MdLocalLibrary size={50} className="text-white" />
          <span className="lms-txt-white ms-3 ">LMS</span>
        </div>
      </Nav>

      <div className="btn-group d-flex flex-column justify-content-between mt-4 py-4 px-3">
        <Link
          to="/issuedbooks"
          className="text-decoration-none text-white side-btn  my-2"
        >
          <button className="btn side-btn  text-white d-flex justify-content-evenly ps-4  my-2">
            <FiCheckCircle size={22} />
            Issued Books
          </button>
        </Link>
        <Link
          to="/allbooks"
          className="text-decoration-none text-white side-btn   my-2"
        >
          <button className="btn side-btn  text-white d-flex justify-content-evenly  my-2">
            <BsBookHalf size={22} />
            All Books
          </button>
        </Link>
        <Link
          to="/students"
          className="text-decoration-none text-white side-btn  my-2"
        >
          <button className="btn side-btn  text-white d-flex justify-content-evenly  my-2">
            <MdOutlinePeople size={25} />
            {/* <img src="/img/students-logo.png" alt="" className="pt-1 " /> */}
            Students
          </button>
        </Link>
        <div className="profile align-items-end">
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
