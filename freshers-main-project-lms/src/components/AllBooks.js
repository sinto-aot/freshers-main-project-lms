import React from "react";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddBook from "./AddBook";
import { useState } from "react";

function AllBooks() {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="d-flex ">
      <Navbar />
      <div className="container student-container" style={{ width: "100%" }}>
        <nav className="navbar border-bottom mx-4">
          <div className="container-fluid">
            <span className="navbar-brand nav-brand mb-0 h1 mt-3 mx-4" >All Books</span>
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
        <AddBook show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />

        {/* <div className="student-table mt-3">
        <table class="table table-borderless d-flex justify-content-between flex-column ">
  <thead className='  border-bottom '>
    <tr className='border-bottom'>
      <th scope="col ">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody >
    <tr className='border-bottom my-3 '>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
 
  </tbody>
</table>
      </div> */}

        <div className="d-flex justify-content-around student-list border-bottom  mt-5 mx-4">
          <p className="list-header">Book Title</p>
          <p className="list-header">Author</p>
          <p className="list-header">Language</p>
          <p className="list-header">Total Copies</p>
          <p className="list-header">Remaining</p>
          <p className="list-header">Actions</p>
                  
        </div>
        <div className="d-flex justify-content-around student-list border-bottom  mt-4 mx-4">
          <p>It Start With Us</p>
          <p>Colleen Hoover</p>
          <p>English</p>
          <p>5</p>
          <p>2</p>
          
          <div className="d-flex justify-content-around actions ">
            <div>
              <img src="/img/edit-icon.png" alt="" className="" />
            </div>
            <div>
              <img src="/img/delete-icon.png" alt="" className="mx-1" />
            </div>
            
          </div>
        </div>

       

       
        
      </div>
    </div>
  );
}

export default AllBooks;
