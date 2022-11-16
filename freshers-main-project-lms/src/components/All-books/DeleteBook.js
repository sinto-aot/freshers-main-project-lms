import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteBook({
  showDeleteModal,
  deleteModalClose,
  bookData,
  setBookData,
  getBookKey,
}) {
  const deleteBook = (id) => {
    console.log(id);
    setBookData(bookData.filter((item) => id !== item.key));
  };
  return (
    <>
      <Modal show={showDeleteModal} onHide={deleteModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the book ?</Modal.Body>
        <Modal.Footer>
          <Button variant="" className="border" onClick={deleteModalClose}>
            Close
          </Button>
          <Button
            variant=""
            className="delete-btn text-white"
            onClick={() => {
              deleteModalClose();
              deleteBook(getBookKey);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteBook;
