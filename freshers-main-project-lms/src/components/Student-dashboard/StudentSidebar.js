import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import {MdOutlinePeople,MdLocalLibrary} from "react-icons/md"
import {FiCheckCircle} from "react-icons/fi"
import { BsBookHalf } from "react-icons/bs"
import {FaBookReader} from "react-icons/fa"

function StudentSidebar() {
  return (
    <div className="std-sidebar border border-1">
      <Nav defaultActiveKey="/home" className="flex-column">
        <div className="logo-container ps-4 mt-3 d-flex align-items-center">
          <MdLocalLibrary
            size={50}
            className="text-white"
          
          />
          {/* <img src="/img/LMS-logo-white.png" alt="" /> */}
          <span className="lms-txt-white ms-3 ">LMS</span>
        </div>
      </Nav>

      <div className="btn-group d-flex flex-column justify-content-between mt-4 py-4 px-3">
        <Link
          to="/my-books"
          className="text-decoration-none text-white std-side-btn  my-2 "
        >
          <button className="btn std-side-btn  text-white d-flex justify-content-evenly ps-4  my-2 ">
            <FaBookReader size={22}
            
            />
            {/* <img src="/img/issued-books-logo.png" alt="" className="pt-1" /> */}
            My Books
          </button>
        </Link>
        <Link
          to="/student-all-books"
          className="text-decoration-none text-white std-side-btn my-2"
        >
          <button className="btn std-side-btn  text-white d-flex justify-content-evenly  my-2 ms-2">
            <BsBookHalf size={22}
            
            />
            {/* <img src="/img/all-books-logo.png" alt="" className="pt-1 " /> */}
            All Books
          </button>
        </Link>
        
      </div>
    </div>
  )
}

export default StudentSidebar