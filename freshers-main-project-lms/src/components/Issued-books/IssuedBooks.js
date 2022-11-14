import React from "react";
import Navbar from "../Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import IssueBook from "./IssueBook";
import { useState } from "react";

function IssuedBooks() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex ">
      <Navbar />
      <div className="container issued-books-container" style={{ width: "100%",  backgroundColor: "#F5F5F5" }}>
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

        <div class="   border-bottom   py-4 mx-4">
          <div class="row">
            <div class="col">It Start With Us</div>
            <div class="col">Nitha Samuel</div>
            <div class="col">02-11-2022 </div>
            <div class="col">02-11-2022 </div>
            <div class="col">10</div>

            <div class="col ">
              <div className="d-flex  actions px-2">
                <div>
                  <img src="/img/issue-book-logo.png" alt="" className="" />
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default IssuedBooks;
