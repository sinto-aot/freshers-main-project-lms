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
  const handleEditName = (e) => {
    setStudentName(e.target.value);
  };
  const handleEditEmail = (e) => {
    setStudentEmail(e.target.value);
  };
  const handleEditPassword = (e) => {
    setStudentPassword(e.target.value);
  };
  const handleEditConPassword = (e) => {
    setStudentConPassword(e.target.value);
  };

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
                onChange={handleEditName}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Eg: johndoe@gmail.com"
                value={studentEmail}
                onChange={handleEditEmail}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Password</Form.Label>
              <Form.Control
                type="password"
                value={studentPassword}
                onChange={handleEditPassword}
                placeholder="********"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-label">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={studentConPassword}
                onChange={handleEditConPassword}
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
