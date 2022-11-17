import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteStudent({
  showDeleteModal,
  deleteModalClose,
  studentData,
  setStudentData,
  getStudentKey,

}) {
  const deleteStudent = (id) => {
    console.log(id);
    setStudentData(studentData.filter((item) => id !== item.key));
  };
  return (
    <>
      <Modal show={showDeleteModal} onHide={deleteModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the Student ?</Modal.Body>
        <Modal.Footer>
          <Button variant="" className="border" onClick={deleteModalClose}>
            Close
          </Button>
          <Button
            variant=""
            className="delete-btn text-white"
            onClick={() => {
              deleteModalClose();
              deleteStudent(getStudentKey);
            }}
          >
            Delete 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteStudent;
