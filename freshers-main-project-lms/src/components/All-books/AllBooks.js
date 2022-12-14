import Navbar from "../Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddBook from "./AddBook";
import { useState, useContext } from "react";
import { bookContext } from "../../App";
import DeleteBook from "./DeleteBook";
import EditBook from "./EditBook";
import { RiDeleteBin6Line } from "react-icons/ri"
import { MdEdit } from "react-icons/md"


function AllBooks() {
  const [bookData, setBookData] = useContext(bookContext);
  const [searchBook,setSearchBook] = useState("")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditShow = () => setShowEditModal(true);
  const handleEditClose = () => setShowEditModal(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const deleteModalClose = () => setShowDeleteModal(false);
  const deleteModalShow = () => setShowDeleteModal(true);

  const [bookKey, setBookKey] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookLanguage, setBookLanguage] = useState("");
  const [bookTotalCopies, setBookTotalCopies] = useState("");
  const [bookRemaining, setBookRemaining] = useState("");

  return (
    <div className="d-flex ">
      <Navbar />
      <div
        className="container all-books-container"
        style={{ width: "100%", backgroundColor: "#F5F5F5" }}
      >
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
              placeholder="Search by student book title or author "
              className=" mt-3 mx-4 "
              onChange={(e) => {
                setSearchBook(e.target.value);
              }}
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
          bookKey={bookKey}
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
          bookKey={bookKey}
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
          {bookData.filter((value) => {
            if (searchBook == "") {
              return value
            } else if (value.bookTitle.toLowerCase().includes(searchBook.toLowerCase()) || value.author.toLowerCase().includes(searchBook.toLowerCase())  ) {
              return value
            }
          }).map((item) => {
            return (
              <div className="   border-bottom   py-4 mx-4" key={item.key}>
                <div className="row">
                  <div className="col list-item">{item.bookTitle}</div>
                  <div className="col list-item">{item.author}</div>
                  <div className="col list-item">{item.language}</div>
                  <div className="col list-item">{item.totalCopies}</div>
                  <div className="col list-item">{item.remaining}</div>
                  <div className="col ">
                    <div className="d-flex  actions px-2">
                      <div>
                        <MdEdit size={20} className="text-secondary"
                             onClick={() => {
                              handleEditShow();
                              setBookKey(item.key);
                              setBookTitle(item.bookTitle);
                              setBookAuthor(item.author);
                              setBookLanguage(item.language);
                              setBookTotalCopies(item.totalCopies);
                              setBookRemaining(item.remaining);
                            }}
                        />
                        {/* <img
                          src="/img/edit-icon.png"
                          alt=""
                          className="icons"
                          onClick={() => {
                            handleEditShow();
                            setBookKey(item.key);
                            setBookTitle(item.bookTitle);
                            setBookAuthor(item.author);
                            setBookLanguage(item.language);
                            setBookTotalCopies(item.totalCopies);
                            setBookRemaining(item.remaining);
                          }}
                        /> */}
                      </div>
                      <div className="">
                        <RiDeleteBin6Line size={20} className="text-danger mx-2"
                            onClick={() => {
                              deleteModalShow();
                              setBookKey(item.key);
                            }}
                        />
                        {/* <img
                          src="/img/delete-icon.png"
                          alt=""
                          className="mx-3 icons"

                          onClick={() => {
                            deleteModalShow();
                            setBookKey(item.key);
                          }}
                        /> */}
                      </div>
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

export default AllBooks;
