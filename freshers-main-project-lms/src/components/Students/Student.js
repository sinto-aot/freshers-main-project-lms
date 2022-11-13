import React from "react";
import Navbar from "../Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddStudent from "./AddStudent";
import { useState } from "react";

function Student() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [studentData, setStudentData] = useState([
    { key: 1, name: "Nitha Samuel", email: "nithasamuel@gmail.com" },
    {key:2,name:"Anjali Thomas",email:"anjali.t@hotmail.com"}
  ])

  return (
    <div className="d-flex ">
      <Navbar />
      <div className="container student-container" style={{ width: "100%" }}>
        <nav className="navbar border-bottom mx-4">
          <div className="container-fluid">
            <span className="navbar-brand nav-brand mb-0 h1 mt-3 ">
              Students
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
              Add New Student
            </Button>
          </div>
        </div>
        <AddStudent
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          handleShow={handleShow}
        />

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

        {/* <div className="d-flex justify-content-around student-list border-bottom  mt-5 mx-4">
          <p className="list-header">Name</p>
          <p className="list-header">Email</p>
          <p className="list-header">Actions</p>
        </div>
        <div className="d-flex justify-content-around student-list border-bottom  mt-4 mx-4">
          <p>Nitha Samuel</p>
          <p>nithasamuel@gmail.com</p>
          <div className="d-flex justify-content-around actions ">
            <div>
              <img src="/img/edit-icon.png" alt="" className="" />
            </div>
            <div>
              <img src="/img/delete-icon.png" alt="" className="mx-1" />
            </div>
            <div>
              <img src="/img/view-icon.png" alt="" />
            </div>
          </div>
        </div> */}

        <div className="  student-list border-bottom list-header  mt-5 py-4 mx-4">
          <div className="row">
            <div className="col">Name</div>
            <div className="col">Email</div>
            <div className="col">Actions</div>
          </div>
        </div>

       { studentData.map((item) =>{
          return(
        <div class="border-bottom   py-4 mx-4"  key={item.key}>
          <div class="row">
                <div class="col">{item.name}</div>
                <div class="col">{item.email}</div>
            <div class="col ">
              <div className="d-flex  actions">
                <div>
                  <img src="/img/edit-icon.png" alt="" className="" />
                </div>
                <div>
                  <img src="/img/delete-icon.png" alt="" className="mx-1" />
                </div>
                <div>
                  <img src="/img/view-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>)
            })}
      </div>
    </div>
  );
}

export default Student;
