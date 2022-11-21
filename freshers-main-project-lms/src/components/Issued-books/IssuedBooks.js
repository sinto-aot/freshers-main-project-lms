import React from "react";
import Navbar from "../Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import IssueBook from "./IssueBook";
import { useState, useContext } from "react";
import { studentContext, bookContext, issueBookContext } from "../../App";
import AllBooks from "../All-books/AllBooks";

function IssuedBooks({ studentKey, studentName, setStudentName }) {
  const [issueData, setIssueBookData] = useContext(issueBookContext);
  const [studentData, setStudentData] = useContext(studentContext);
  const [bookData, setBookData] = useContext(bookContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [issuedKey, setIssuedKey] = useState("");

  return (
    <div className="d-flex ">
      <Navbar />
      <div
        className="container issued-books-container"
        style={{ width: "100%", backgroundColor: "#F5F5F5" }}
      >
        <nav className="navbar border-bottom mx-4">
          <div className="container-fluid">
            <span className="navbar-brand nav-brand mb-0 h1 mt-3 mx-">
              Issued Books
            </span>
          </div>
        </nav>
        <div className="col-12 d-flex justify-content-between mt-2">
          <div className="search col-5">
            <Form.Control
              type="text"
              placeholder="Search by student name or email "
              className=" mt-3 mx-4 "
            />
          </div>
          <div className="add-student col-5 mt-3 d-flex justify-content-end ">
            <Button
              variant=""
              className="add-student-btn text-white px-5 mx-4"
              type="submit"
              onClick={handleShow}
            >
              Issue Book
            </Button>
          </div>
        </div>
        <IssueBook
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          handleShow={handleShow}
        />
        <div
          className="issued-books-content mx-4 px-3"
          style={{ backgroundColor: "#FFF" }}
        >
          <div className="  student-list border-bottom list-header  mt-5 py-4 mx-4">
            <div className="row">
              <div className="col">Book Title</div>
              <div className="col">Student</div>
              <div className="col">Issue Date</div>
              <div className="col">Due Date</div>
              <div className="col">
                Fine <br /> (Rs. 10 per day){" "}
              </div>
              <div className="col">Actions</div>
            </div>
          </div>

          {issueData.map((item) => {
            return (
              <div className="   border-bottom   py-4 mx-4" key={item.key}>
                <div className="row">
                  {bookData.map((book) => {
                    if (book.key == item.bTitle) {
                      // console.log("Hio");
                      return <div className="col">{book.bookTitle}</div>;
                    }
                  })}
                  {studentData.map((student) => {
                    if (student.key == item.sName) {
                      return <div className="col">{student.name}</div>;
                    }
                  })}

                  <div className="col">{item.issueDate}</div>
                  <div className="col">{item.dueDate}</div>
                  <div className="col">{item.fine}</div>

                  <div className="col ">
                    <div className="d-flex  actions px-2">
                      <div>
                        <img
                          src="/img/issue-book-logo.png"
                          alt=""
                          className=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IssuedBooks;
