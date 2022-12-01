import React from "react";
import Navbar from "../Navbar";
import Form from "react-bootstrap/Form";
import { useState, useContext, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { studentContext, bookContext, issueBookContext } from "../../App";
import shortid from "shortid";

function ViewStudent() {
  let { id } = useParams();
  const [issuedData, setIssuedData] = useContext(issueBookContext);
  const [studentData, setStudentData] = useContext(studentContext);
  const [bookData, setBookData] = useContext(bookContext);


  // const [studentDetails, setStudentDetails] = useState();
  const studentDetails = issuedData.filter((item) => item.sName === id )

  const studentDetailsTemp = studentDetails.map((item) => {
    let stdData = {
      key: item.key,
      book: "",
      author: "",
      issueDate: item.issueDate,
      dueDate: item.dueDate,
      returnDate: item.returnDate,
      fine:item.fineAmt
    }

    studentData.map((std) => {
      if (std.key == item.sName) {
        stdData.key = std.key;
      }
    });

    bookData.map((book) => {
      if (book.key == item.bTitle) {
        stdData.book = book.bookTitle;
        stdData.author = book.author;
      }
    })

    return stdData;

  })
console.log(studentDetailsTemp)
  return (
    <div className="d-flex ">
      <Navbar />
      <div
        className="container student-container"
        style={{ width: "100%", backgroundColor: "#F5F5F5" }}
      >
        <nav className="navbar border-bottom mx-4">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 mt-3 d-flex">
              <Link to="/students " className="text-dark d-flex " style={{textDecoration: 'none'}}>
                <IoIosArrowBack className="mt-2" />
              
                <p className="view-student-head mt-2" >Students / </p>
                </Link>{" "}
              {studentData.map((item) => {
                if (item.key == id) {
                  return (
                    <span className="view-student-name mt-2">{item.name}</span>
                  );
                }
              })}
            </span>
          </div>
        </nav>

        <div
          className="student-details d-flex justify-content-between mx-4 mt-3 px-3"
          style={{ backgroundColor: "#FFF" }}
        >
          <div className="student-title">
            {studentData.map((item) => {
              if (item.key == id) {
                return <p className="std-name mt-3">{item.name}</p>;
              }
            })}

            {studentData.map((item) => {
              if (item.key == id) {
                return <p className="std-email">{item.email}</p>;
              }
            })}
          </div>
          <div className="d-flex flex-column justify-space-around student-book-details border-start ps-4 mx-5  py-3">
            <p className="book-details">
              Total Books issued <span className="ms-5">5</span>{" "}
            </p>
            <p className="book-details">
              Returned Books <span className="ms-5">4</span>{" "}
            </p>
            <p className="book-details">
              Total Fine <span className="ms-5">Rs. 70</span>
            </p>
          </div>
        </div>

        <div
          className="student-content mx-4 px-3 mt-3"
          style={{ backgroundColor: "#FFF" }}
        >
          <div className="std-issued-title pt-3">Issued Books (5)</div>
          <div className="col-12 d-flex justify-content-between mt-2">
            <div className="search col-5">
              <Form.Control
                type="text"
                placeholder="Search by student name or author "
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

          {studentDetailsTemp.map((item) => {
            console.log("ee")
            if (item.key === id) {
              console.log("aa")
              return (
                <div className="border-bottom   py-4 " key={shortid.generate()} >
                  <div className="row">
                    <div className="col">{item.book}</div>
                    <div className="col">{item.author}</div>
                    <div className="col">{item.issueDate}</div>
                    <div className="col">{item.dueDate}</div>
                    <div className="col">{item.returnDate ? item.returnDate : "-"}</div>
                    <div className="col">{item.fine}</div>
                  </div>
                </div>
              );
            }
            
          })}
        </div>
      </div>
    </div>
  );
}

export default ViewStudent;
