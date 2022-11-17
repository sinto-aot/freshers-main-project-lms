import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function EditStudent({
  showEditModal,
  handleEditClose,
  studentData,
  setStudentData,
  getStudentKey,
  getstudentName,
  setGetStudentName,
  getStudentEmail,
  setGetStudentEmail
}) {
  
  const handleEditName = (e) => {
    setGetStudentName(e.target.value)
  }
  const handleEditEmail = (e) => {
    setGetStudentEmail(e.target.value)
  }
  const handleEditPassword = (e) => {
    setGetStudentName(e.target.value)
  }
  const handleEditConPassword = (e) => {
    setGetStudentName(e.target.value)
  }
 
  const updateStudent = () => {
    setStudentData(
      studentData.map((student) => {
        if (student.key === getStudentKey) {
          return {
            ...student,
            name: getstudentName,
            email: getStudentEmail
          };
        }
      
        return student;
      })
    );
  }
    

   
  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: John Doe"
                value={getstudentName}
                onChange={handleEditName}
                autoFocus />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Eg: johndoe@gmail.com"
                value={getStudentEmail}
                onChange={handleEditEmail}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleEditPassword}
                placeholder="********" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleEditConPassword}
                placeholder="********" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" className="border" onClick={handleEditClose}>
            Close
          </Button>
          <Button
            variant=""
            className="add-student-btn text-white"
            onClick={() => {
              handleEditClose();
              updateStudent();
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditStudent;
