import React, { useState,useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { bookContext, studentContext } from "../../App";


function IssueBook({
  show,
  handleClose
  
 
}) {
  const [studentData, setStudentData] = useContext(studentContext);
  const [bookData, setBookData] = useContext(bookContext);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Issue Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Book</Form.Label>
              <Form.Select>
                <option>Select Book</option>
                {bookData.map((item) => {
                  return (
                    <option value={item.bookTitle}>{item.bookTitle}</option>

                  );
                }
                )}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Student</Form.Label>
              <Form.Select>
                <option>Select Student</option>

                {studentData.map((item) => {
                  return (
                    <option value={item.name}>{item.name}</option>
                  );
                })}
                
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Issue Date</Form.Label>
              <Form.Control type="text" placeholder="09-11-2022" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Due Date</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" className="border" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant=""
            className="add-student-btn text-white"
            onClick={handleClose}
          >
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default IssueBook;
