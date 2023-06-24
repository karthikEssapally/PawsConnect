import React, { useContext, useState } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { loginContext } from "../../contexts/loginContext";
import axios from "axios";

function Home() {
  const [currentUser, error, userLoginStatus, loginUser, logoutUser] = useContext(loginContext);
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("post", selectedFile);

        // Make a POST request to the backend API to create a new post
        await axios.post("/posts", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Reset the form and close the modal
        setSelectedFile(null);
        setShow(false);
      } catch (error) {
        console.error("Error creating post:", error);
      }
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add Photos
      </Button>

      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title>Add Photos</Modal.Title>
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

