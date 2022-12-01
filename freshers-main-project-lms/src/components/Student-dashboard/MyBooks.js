import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { studentContext } from "../../App";
import StudentSidebar from "./StudentSidebar";

function MyBooks() {
  const [studentData, setStudentData] = useContext(studentContext);

  return (
    <div className="d-flex ">
      <StudentSidebar />
      <div
        className="container student-container"
        style={{ width: "100%", backgroundColor: "#F5F5F5" }}
      >
        <nav className="navbar border-bottom mx-4">
          <div className="container-fluid">
            <span className="navbar-brand nav-brand mb-0 h1 mt-3 ">
              My Books
            </span>
          </div>
        </nav>
        <div className="col-12 d-flex justify-content-between mt-2">
          <div className="search col-5">
            <Form.Control
              type="text"
              placeholder="Search by book title or author "
              className=" mt-3 mx-4 "
            />
          </div>
          <div className="add-student col-2 mt-3 d-flex judtify-content-end ">
            <div className=" sort-txt mt-2 ">
              <p>Sort By : </p>
            </div>
            <div className="select-box">
              <Form.Select aria-label="Default select example" className="">
                <option value="1">Issue Date</option>
                <option value="2">Due Date</option>
              </Form.Select>
            </div>
          </div>
        </div>

        <div className="student-nav border-bottom mx-4 mt-2">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav gap-5">
                  <li class="nav-item">
                    <a class="nav-link " href="#">
                      Issued Books (6)
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Pending to return (4)
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Returned Books (2)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div
          className="student-content mx-4 px-3"
          style={{ backgroundColor: "#FFF" }}
        >
          <div className="  student-list border-bottom list-header mx-4 mt-5 py-4 ">
            <div className="row">
              <div className="col">Book Title</div>
              <div className="col">Author</div>
              <div className="col">Issue Date</div>
              <div className="col">Due Date</div>
              <div className="col">Return Date</div>
              <div className="col">
                Fine <br />
                (Rs. 10 per day)
              </div>
            </div>
          </div>

          {studentData.map((item) => {
            return (
              <div className="border-bottom  py-4 mx-4" key={item.key}>
                <div className="row">
                  <div className="col list-item"></div>
                  <div className="col list-item"></div>
                  <div className="col list-item"></div>
                  <div className="col list-item"></div>
                  <div className="col list-item"></div>
                  <div className="col list-item"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyBooks;
