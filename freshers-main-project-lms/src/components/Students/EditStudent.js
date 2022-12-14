import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function EditStudent({
  showEditModal,
  handleEditClose,
  studentData,
  setStudentData,
  studentKey,
  studentName,
  setStudentName,
  studentEmail,
  setStudentEmail,
  studentPassword,
  setStudentPassword,
  studentConPassword,
  setStudentConPassword,
}) {
  const editName = (e) => {
    setStudentName(e.target.value);
  };
  const editEmail = (e) => {
    setStudentEmail(e.target.value);
  };
  const editPassword = (e) => {
    setStudentPassword(e.target.value);
  };
  const editConPassword = (e) => {
    setStudentConPassword(e.target.value);
  };


  // Edit student 
  const updateStudent = () => {
    setStudentData(
      studentData.map((student) => {
        if (student.key === studentKey) {
          return {
            ...student,
            name: studentName,
            email: studentEmail,
            password: studentPassword,
            cpassword: studentConPassword,
          };
        }
        return student;
      })
    );
  };

  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: John Doe"
                value={studentName}
                onChange={editName}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Eg: johndoe@gmail.com"
                value={studentEmail}
                onChange={editEmail}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Password</Form.Label>
              <Form.Control
                type="password"
                value={studentPassword}
                onChange={editPassword}
                placeholder="********"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={studentConPassword}
                onChange={editConPassword}
                placeholder="********"
              />
            </Form.Group>
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
              updateStudent();
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditStudent;
