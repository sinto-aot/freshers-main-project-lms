import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import shortid from "shortid";

function AddBooks({
  show,
  handleClose,
  bookData,
  setBookData,
}) {
  const [bookInput, setBookInput] = useState({
    bookTitle: "",
    author: "",
    language: "",
    totalCopies: "",
    remaining: "",
  });

  const handleBookInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setBookInput({ ...bookInput, [name]: value });
  };

  const handleAddBook = () => {
    setBookData([
      ...bookData,
      {
        key: shortid.generate(),
        bookTitle: bookInput.bookTitle,
        author: bookInput.author,
        language: bookInput.language,
        totalCopies: bookInput.totalCopies,
        remaining: bookInput.remaining,
      },
    ]);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Book Title</Form.Label>
              <Form.Control
                type="text"
                name="bookTitle"
                value={bookInput.bookTitle}
                onChange={handleBookInput}
                placeholder="Eg: Pride and Prejudice"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={bookInput.author}
                onChange={handleBookInput}
                placeholder="Eg: Jane Austen"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Language</Form.Label>
              <Form.Select
                name="language"
                value={bookInput.language}
                onChange={handleBookInput}
              >
                <option value="">Select Language</option>
                <option>English</option>
                <option>Malayalam</option>
              </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-evenly">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="modal-label">Total Copies</Form.Label>
                <Form.Control
                  type="number"
                  name="totalCopies"
                  value={bookInput.totalCopies}
                  onChange={handleBookInput}
                  placeholder="5"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="modal-label">Remaining</Form.Label>
                <Form.Control
                  type="number"
                  name="remaining"
                  value={bookInput.remaining}
                  onChange={handleBookInput}
                  placeholder="2"
                  required
                />
              </Form.Group>
            </div>
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
              handleAddBook();
              setBookInput("");
            }}
          >
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddBooks;
