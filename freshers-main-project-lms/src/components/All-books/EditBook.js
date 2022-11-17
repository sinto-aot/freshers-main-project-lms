import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import shortid from "shortid";

function EditBook({
  showEditModal,
  handleEditClose,
  bookData,
  setBookData,
  getBookKey,
  bookTitle,
  setBookTitle,
  bookAuthor,
  setBookAuthor,
  bookLanguage,
  setBookLanguage,
  bookTotalCopies,
  setBookTotalCopies,
  bookRemaining,
  setBookRemaining,
}) {
  const handleEditBookTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const hadleEditBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const handleEditBooklanguage = (e) => {
    setBookLanguage(e.target.value);
  };

  const handleEditBookTotalCopies = (e) => {
    setBookTotalCopies(e.target.value);
  };

  const handleEditBookRemaining = (e) => {
    setBookRemaining(e.target.value);
    };
    

    const updateBook = () => {
        setBookData(
            bookData.map((book) => {
                if (book.key === getBookKey) {
                    return {
                        ...book,
                        bookTitle: bookTitle,
                        author: bookAuthor,
                        language: bookLanguage,
                        totalCopies: bookTotalCopies,
                        remaining: bookRemaining
                    };
                }
                return book
            }
            )
        );
    };


  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Book Title</Form.Label>
              <Form.Control
                type="text"
                name="bookTitle"
                value={bookTitle}
                onChange={handleEditBookTitle}
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
                value={bookAuthor}
                onChange={hadleEditBookAuthor}
                placeholder="Eg: Jane Austen"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Language</Form.Label>
              <Form.Select
                name="language"
                value={bookLanguage}
                onChange={handleEditBooklanguage}
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
                  type="text"
                  name="totalCopies"
                  value={bookTotalCopies}
                  onChange={handleEditBookTotalCopies}
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
                  type="text"
                  name="remaining"
                  value={bookRemaining}
                  onChange={handleEditBookRemaining}
                  placeholder="2"
                  required
                />
              </Form.Group>
            </div>
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
                updateBook();
          
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditBook;
