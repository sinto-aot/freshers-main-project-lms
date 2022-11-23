import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import shortid from "shortid";
import { studentContext } from "../../App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function AddStudent({ showAddModal, handleAddClose }) {

  const [studentData, setStudentData] = useContext(studentContext);

  // Error alert
  const [error, setError] = useState(false);

  //Input values from forms
  const [studentInput, setStudentInput] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setStudentInput({ ...studentInput, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  //Add student
  const handleAddStudent = () => {
    validateStudent();
    setStudentInput({
      name: "",
      email: "",
      password: "",
      cpassword: ""
    });
  };


  const validateStudent = () => {
    if (
      !studentInput.name ||
      !studentInput.email ||
      !studentInput.password ||
      !studentInput.cpassword ||
      studentInput.password != studentInput.cpassword
    ) {
      setError(true)
    }
    else {
      handleAddClose();
      setStudentData([
        ...studentData,
        {
          key: shortid.generate(),
          name: studentInput.name,
          email: studentInput.email,
          password: studentInput.password,
          cpassword: studentInput.cpassword,
        },
      ]);
    }
  }
    

  const addStudentToast = () => {
    toast.error("Please fill the form", {
      position: "top-center"
    });
  }

  return (
    <>
      <Modal show={showAddModal} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="needs-validation" >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={studentInput.name}
                onChange={handleInput}
                placeholder="Eg: John Doe"
                autoFocus
                required
              />
              {error && !studentInput.name ?
                (<p className="text-danger">The Name field is required</p>) : ("")}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={studentInput.email}
                onChange={handleInput}
                placeholder="Eg: johndoe@gmail.com"
              />
               {error && !studentInput.email ?
                (<p className="text-danger">The Email field is required</p>) : ("")}
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={studentInput.password}
                onChange={handleInput}
                placeholder="********"
              />
              {error && !studentInput.password ?
                (<p className="text-danger">The Password field is required</p>) : ("")}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="cpassword"
                value={studentInput.cpassword}
                onChange={handleInput}
                placeholder="********"
              />
              {error && !studentInput.cpassword ?
                (<p className="text-danger">The Confirm Password field is required</p>) : ("")}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" className="border" onClick={handleAddClose}>
            Close
          </Button>
          <Button
            variant=""
            className="add-student-btn text-white"
            onClick={() => {
              addStudentToast();
              handleAddStudent();
            }}
          >
            Add Student
          </Button>
          <ToastContainer/>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddStudent;
