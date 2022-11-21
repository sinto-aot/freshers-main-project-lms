import React, { useState, useContext } from "react";
import Navbar from "../Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import DeleteStudent from "./DeleteStudent";
import { Link } from "react-router-dom";
import { studentContext } from "../../App";
import IssueBook from "../Issued-books/IssueBook";

function Student() {
  const [studentData, setStudentData] = useContext(studentContext);
  const [searchStudent, setSearchStudent] = useState("")


  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddShow = () => setShowAddModal(true);
  const handleAddClose = () => setShowAddModal(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditShow = () => setShowEditModal(true);
  const handleEditClose = () => setShowEditModal(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const deleteModalClose = () => setShowDeleteModal(false);
  const deleteModalShow = () => setShowDeleteModal(true);

  const [studentKey, setStudentKey] = useState("");
  console.log(studentKey)
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentConPassword, setStudentConPassword] = useState("");

  return (
    <div className="d-flex ">
      <Navbar />
      <div
        className="container student-container"
        style={{ width: "100%", backgroundColor: "#F5F5F5" }}
      >
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
              onChange={(e) => {
                setSearchStudent(e.target.value);
              }}
            />
          </div>
          <div className="add-student col-5 mt-3 d-flex justify-content-end ">
            <Button
              variant=""
              className="add-student-btn text-white px-5 mx-4"
              type="submit"
              onClick={handleAddShow}
            >
              Add New Student
            </Button>
          </div>
        </div>
        <AddStudent
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          handleAddClose={handleAddClose}
          handleAddShow={handleAddShow}
          studentData={studentData}
          setStudentData={setStudentData}
        />
        <EditStudent
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          handleEditClose={handleEditClose}
          handleEditShow={handleEditShow}
          studentData={studentData}
          setStudentData={setStudentData}
          studentKey={studentKey}
          studentName={studentName}
          setStudentName={setStudentName}
          studentEmail={studentEmail}
          setStudentEmail={setStudentEmail}
          studentPassword={studentPassword}
          setStudentPassword={setStudentPassword}
          studentConPassword={studentConPassword}
          setStudentConPassword={setStudentConPassword}
        />
        <DeleteStudent
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          deleteModalClose={deleteModalClose}
          deleteModalShow={deleteModalShow}
          studentData={studentData}
          setStudentData={setStudentData}
          studentKey={studentKey}
        />
     
        <IssueBook
          studentData={studentData}
          setStudentData={setStudentData}
          studentKey={studentKey}
          studentName={studentName}
          setStudentName={setStudentName}
        />
        <div
          className="student-content mx-4 px-3"
          style={{ backgroundColor: "#FFF" }}
        >
          <div className="  student-list border-bottom list-header  mt-5 py-4 ">
            <div className="row">
              <div className="col">Name</div>
              <div className="col">Email</div>
              <div className="col">Actions</div>
            </div>
          </div>

          {studentData.filter((value) => {
            if (searchStudent == "") {
              return value
            } else if (value.name.toLowerCase().includes(searchStudent.toLowerCase())) {
              return value
            }
          }).map((item) => {
            return (
              <div className="border-bottom   py-4 " key={item.key}>
                <div className="row">
                  <div className="col">{item.name}</div>
                  <div className="col">{item.email}</div>
                  <div className="col ">
                    <div className="d-flex  actions">
                      <div>
                        <img
                          src="/img/edit-icon.png"
                          alt=""
                          className=""
                          onClick={() => {
                            handleEditShow();
                            setStudentKey(item.key);
                            setStudentName(item.name);
                            setStudentEmail(item.email);
                            setStudentPassword(item.password);
                            setStudentConPassword(item.cPassword);
                          }}
                        />
                      </div>
                      <div>
                        <img
                          src="/img/delete-icon.png"
                          alt=""
                          className="mx-1"
                          onClick={() => {
                            deleteModalShow();
                            setStudentKey(item.key);
                          }}
                        />
                      </div>
                      <Link to="/view-student">
                        <div>
                          <img src="/img/view-icon.png" alt="" />
                        </div>
                      </Link>
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

export default Student;
