import React from "react";
import Navbar from "../Navbar";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ViewStudent() {

  let {id} = useParams()

  const [studentData, setStudentData] = useState([
    {
      key: 1,
      bookTitle: "It Start With Us",
      author: "Collen Hoover",
      issueDate: "10-11-2022",
      dueDate: "18-11-2022",
      returnDate: "10-11-2022",
      fine: 0,
    },
    {
      key: 2,
      bookTitle: "Pride and Prjudice",
      author: "Jane Austin",
      issueDate: "02-11-2022",
      dueDate: "08-11-2022",
      returnDate: "10-11-2022",
      fine: 20,
    },
  ]);

  return (
    <div className="d-flex ">
      <Navbar />
      <div
        className="container student-container"
        style={{ width: "100%", backgroundColor: "#F5F5F5" }}
      >
        <nav className="navbar border-bottom mx-4">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 mt-3 ">
              <Link to="/students " className="text-dark">
                <IoIosArrowBack />
              </Link>{" "}
              Students / Nitha Samuel
            </span>
          </div>
        </nav>

        <div
          className="student-details d-flex justify-content-between mx-4 mt-3 px-3"
          style={{ backgroundColor: "#FFF" }}
        >
          <div className="student-title">
            <p>Nitha Samuel</p>
            <p>nithasamuel@gmail.com</p>
          </div>
          <div className="student-book-details border-start ps-3">
            <p>Total Books issued 5 </p>
            <p>Returned Books 4 </p>
            <p>Total Fine Rs. 70</p>
          </div>
        </div>

        <div
          className="student-content mx-4 px-3 mt-3"
          style={{ backgroundColor: "#FFF" }}
        >
          <div className="issued-count pt-3">Issued Books (5)</div>
          <div className="col-12 d-flex justify-content-between mt-2">
            <div className="search col-5">
              <Form.Control
                type="text"
                placeholder="Search by student name or email "
                className=" mt-3  "
              />
            </div>
          </div>
          <div className="  student-list border-bottom list-header   py-4 ">
            <div className="row">
              <div className="col">Book Title</div>
              <div className="col">Author</div>
              <div className="col">Issue Date</div>
              <div className="col">Due Date</div>
              <div className="col">Return Date</div>
              <div className="col">
                Fine <br /> (Rs. 10 per day)
              </div>
            </div>
          </div>

          {studentData.map((item) => {
            return (
              <div className="border-bottom   py-4 " key={item.key}>
                <div className="row">
                  <div className="col">{item.bookTitle}</div>
                  <div className="col">{item.author}</div>
                  <div className="col">{item.issueDate}</div>
                  <div className="col">{item.dueDate}</div>
                  <div className="col">{item.returnDate}</div>
                  <div className="col">{item.fine}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ViewStudent;
