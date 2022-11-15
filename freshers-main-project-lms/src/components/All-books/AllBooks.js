import React from "react";
import Navbar from "../Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddBook from "./AddBook";
import { useState, useContext } from "react";
import { studentContext } from "../../App";

function AllBooks() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex ">
      <Navbar />
      <div className="container all-books-container" style={{ width: "100%" , backgroundColor: "#F5F5F5"}}>
        <nav className="navbar border-bottom mx-4">
          <div className="container-fluid">
            <span className="navbar-brand nav-brand mb-0 h1 mt-3 ">
              All Books
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
              Add New Book
            </Button>
          </div>
        </div>
        <AddBook
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          handleShow={handleShow}
        />

        
           <div
          className="student-content mx-4 px-3"
          style={{ backgroundColor: "#FFF" }}
        >
        <div className="  student-list border-bottom list-header  mt-5 py-4 mx-4">
          <div className="row">
            <div className="col">Book</div>
            <div className="col">Author</div>
            <div className="col">Language</div>
            <div className="col">Total Copies</div>
            <div className="col">Remaining</div>
            <div className="col">Actions</div>
          </div>
        </div>

        <div class="   border-bottom   py-4 mx-4">
          <div class="row">
            <div class="col">It Start With Us</div>
            <div class="col">Colleen Hoover</div>
            <div class="col">English</div>
            <div class="col">5</div>
            <div class="col">2</div>

            <div class="col ">
              <div className="d-flex  actions px-2">
                <div>
                  <img src="/img/edit-icon.png" alt="" className="" />
                </div>
                <div className="">
                <img src="/img/delete-icon.png" alt="" className="mx-1" />
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

export default AllBooks;
