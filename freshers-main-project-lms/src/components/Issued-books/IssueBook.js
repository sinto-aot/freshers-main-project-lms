import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import shortid from "shortid";
import { bookContext, issueBookContext, studentContext } from "../../App";

function IssueBook({ show, handleClose }) {
  const [issuedData, setIssuedData] = useContext(issueBookContext);
  const [studentData, setStudentData] = useContext(studentContext);
  const [bookData, setBookData] = useContext(bookContext);

  const [issuedBook, setIssuedBook] = useState({
    key: "",
    bookTitle: "",
    name: "",
    issueDate: "",
    dueDate: "",
    fine: "10"
  });

  const issueInput = (e) => {
    let name = e.target.name;
    let value = e.target.value
    setIssuedBook({ ...issuedBook, [name]: value });
  };

  const addIssuedBook = () => {
    setIssuedData([
      ...issuedData,
      {
        key: shortid.generate(),
        bTitle: issuedBook.bookTitle,
        sName: issuedBook.name ,
        issueDate:issuedBook.issueDate ,
        dueDate:issuedBook.dueDate ,
        fine:issuedBook.fine
      },
    ]);
    console.log(issuedData)
    
  };

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
              <Form.Select
                name="bookTitle"
                onChange={issueInput}
              >
                <option>Select Book</option>
                {bookData.map((item) => {
                  return <option value={item.key}>{item.bookTitle}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Student</Form.Label>
              <Form.Select
                name="name"
                onChange={issueInput}
              >
                <option>Select Student</option>
                {studentData.map((item) => {
                  return <option value={item.key}>{item.name}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Issue Date</Form.Label>
              <Form.Control
                type="date"
                name="issueDate"
                onChange={issueInput}
                placeholder="09-11-2022"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Due Date</Form.Label>
              <Form.Control
                type="date"
                name="dueDate"
                onChange={issueInput}
                placeholder=""
                autoFocus
              />
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
            onClick={() => {
              handleClose();
              addIssuedBook();
            }}
          >
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default IssueBook;
