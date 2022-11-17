import Navbar from "../Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddBook from "./AddBook";
import { useState, useContext } from "react";
import { bookContext } from "../../App";
import DeleteBook from "./DeleteBook";
import EditBook from "./EditBook";


function AllBooks() {
  const [bookData, setBookData] = useContext(bookContext);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditShow = () => setShowEditModal(true);
  const handleEditClose = () => setShowEditModal(false);


  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const deleteModalClose = () => setShowDeleteModal(false);
  const deleteModalShow = () => setShowDeleteModal(true);


  const [getBookKey, setGetBookKey] = useState("");
  const bookKey = (getBookKey) => {
    setGetBookKey(getBookKey)
    console.log(getBookKey)
  }

  const [bookAuthor, setBookAuthor] = useState("");
  const EditBookAuthor = (bookAuthor) => {
    setBookAuthor(bookAuthor)
  }

  const [bookTitle, setBookTitle] = useState("");
  const EditBookTitle = (bookTitle) => {
    setBookTitle(bookTitle)
  }

  const [bookLanguage, setBookLanguage] = useState("");
  const EditBookLanguage = (bookLanguage) => {
    setBookLanguage(bookLanguage)
  }

  const [bookTotalCopies, setBookTotalCopies] = useState("");
  const EditBookTotalCopies = (bookTotalCopies) => {
    setBookTotalCopies(bookTotalCopies)
  }

  const [bookRemaining, setBookRemaining] = useState("");
  const EditBookRemaining = (bookRemaining) => {
    setBookRemaining(bookRemaining)
  }
  

  

  return (
    <div className="d-flex ">
      <Navbar />
      <div className="container all-books-container" style={{ width: "100%" , backgroundColor: "#F5F5F5"}}>
        <nav className="navbar border-bottom mx-4">
          <div className="container-fluid">
            <span className="navbar-brand nav-brand mb-0 h1 mt-3 ">
              All Books
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
              Add New Book
            </Button>
          </div>
        </div>
        <AddBook
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          handleShow={handleShow}
          bookData={bookData}
          setBookData={setBookData}
        />
        <EditBook
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          handleEditShow={handleEditShow}
          handleEditClose={handleEditClose}
          bookData={bookData}
          setBookData={setBookData}
          getBookKey={getBookKey}
          bookTitle={bookTitle}
          setBookTitle={setBookTitle}
          bookAuthor={bookAuthor}
          setBookAuthor={setBookAuthor}
          bookLanguage={bookLanguage}
          setBookLanguage={setBookLanguage}
          bookTotalCopies={bookTotalCopies}
          setBookTotalCopies={setBookTotalCopies}
          bookRemaining={bookRemaining}
          setBookRemaining={setBookRemaining}
        />
        <DeleteBook
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          deleteModalClose={deleteModalClose}
          deleteModalShow={deleteModalShow}
          bookData={bookData}
          setBookData={setBookData}
          getBookKey={getBookKey}

        />
        
           <div
          className="student-content mx-4 px-3"
          style={{ backgroundColor: "#FFF" }}
        >
        <div className="  student-list border-bottom list-header  mt-5 py-4 mx-4">
          <div className="row">
            <div className="col">Book</div>
            <div className="col">Author</div>
            <div className="col">Language</div>
            <div className="col">Total Copies</div>
            <div className="col">Remaining</div>
            <div className="col">Actions</div>
          </div>
        </div>
          {bookData.map((item) => {
            return (
              <div className="   border-bottom   py-4 mx-4" key={item.key}>
          <div className="row">
                  <div className="col">{item.bookTitle}</div>
                  <div className="col">{item.author}</div>
            <div className="col">{item.language}</div>
            <div className="col">{item.totalCopies}</div>
            <div className="col">{item.remaining}</div>

            <div className="col ">
              <div className="d-flex  actions px-2">
                <div>
                        <img src="/img/edit-icon.png"
                          alt=""
                          className=""
                          onClick={() => {
                            handleEditShow();
                            bookKey(item.key);
                            EditBookTitle(item.bookTitle);
                            EditBookAuthor(item.author)
                            EditBookLanguage(item.language)
                            EditBookTotalCopies(item.totalCopies)
                            EditBookRemaining(item.remaining)
                          }}
                        />
                </div>
                <div className="">
                        <img src="/img/delete-icon.png" alt=""
                          className="mx-1"
                          // onClick={() => { deleteBook(item.key) }}
                          // onClick={deleteModalShow}
                          onClick={() =>
                          {
                            deleteModalShow();
                            bookKey(item.key)
                          }}
                        />
                </div>
              </div>
            </div>
          </div>
          </div>
            )
          }
          )}
        
          </div>
      </div>
    </div>
  );
}

export default AllBooks;
