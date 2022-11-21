import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import shortid from "shortid";
import { studentContext } from "../../App";
function AddStudent({ showAddModal, handleAddClose }) {
  const [studentData, setStudentData] = useContext(studentContext);
  const [error, setError] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddStudent = () => {
    if (
      studentInput.name.length == 0 ||
      studentInput.email.length == 0 ||
      studentInput.password.length == 0 ||
      studentInput.cpassword.length == 0 &&
      studentInput.password != studentInput.cpassword
    ) {
      setError(true);
    } else {
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
  };

  return (
    <>
      <Modal show={showAddModal} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="needs-validation" onSubmit={handleSubmit}>
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
              {error ? <p className="text-danger">The Name field is required</p> : ""}
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
              {error ? <p className="text-danger">The Email field is required</p> : ""}
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
              {error ? (
                <p className="text-danger">The Password field is required</p>
              ) : (
                ""
              )}
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
              {error ? (
                <p className="text-danger">The Confirm Password is required</p>
              ) : (
                ""
              )}
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
              handleAddClose();
              handleAddStudent();
              setStudentInput("");
            }}
          >
            Add Student
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddStudent;
