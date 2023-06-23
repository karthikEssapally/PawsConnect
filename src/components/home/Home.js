import React, { useContext } from "react";
import "./Home.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { loginContext } from "../../contexts/loginContext";
import { useHistory } from "react-router-dom";

function Home() {
  const [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const history = useHistory();

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the upload logic here
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      // Handle the file upload
      // You can use axios or fetch to send the file to the server
    }
    setShow(false);
  };

  const handleAddPhotos = () => {
    if (userLoginStatus) {
      setShow(true);
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleAddPhotos}>
        Add Photos
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add Photos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile">
              <Form.Label>Select a photo:</Form.Label>
              <Form.Control type="file" onChange={handleFileSelect} />
            </Form.Group>
            <Button type="submit">Upload</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;
