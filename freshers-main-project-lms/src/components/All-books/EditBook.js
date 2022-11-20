import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";


function EditBook({
  showEditModal,
  handleEditClose,
  bookData,
  setBookData,
  bookKey,
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
  const editBookTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const editBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const editBookLanguage = (e) => {
    setBookLanguage(e.target.value);
  };

  const editBookTotalCopies = (e) => {
    setBookTotalCopies(e.target.value);
  };

  const editBookRemaining = (e) => {
    setBookRemaining(e.target.value);
  };

  const updateBook = () => {
    setBookData(
      bookData.map((book) => {
        if (book.key === bookKey) {
          return {
            ...book,
            bookTitle: bookTitle,
            author: bookAuthor,
            language: bookLanguage,
            totalCopies: bookTotalCopies,
            remaining: bookRemaining,
          };
        }
        return book;
      })
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
                onChange={editBookTitle}
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
                onChange={editBookAuthor}
                placeholder="Eg: Jane Austen"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Language</Form.Label>
              <Form.Select
                name="language"
                value={bookLanguage}
                onChange={editBookLanguage}
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
                  onChange={editBookTotalCopies}
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
                  onChange={editBookRemaining}
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
