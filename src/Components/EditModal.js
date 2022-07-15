import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaEdit } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';

function EditModal() {
  const [show, setShow] = useState(false);
  const [editedtitle, seteditedtitle] = useState('')
  const [editeddes, setediteddes] = useState('')


  const titlehandler = (e) => {
    seteditedtitle(e.target.value)
  }

  const deshandler = (e) => {

    setediteddes(e.target.value)
  }

  const submithandler = (e) => {
    e.preventDefault()


    //   const editing = {
    //  Editedtitle:editedtitle,
    //     EditedDes:editeddes,
    //   } 

  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <FaEdit onClick={handleShow}></FaEdit>


      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={submithandler}>   <Modal.Header closeButton>
          <Modal.Title>Editing Task</Modal.Title>
        </Modal.Header>
          <Modal.Body>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Title</Form.Label>
              <Form.Control
                value={editedtitle}
                onChange={titlehandler}
                type="text"
                placeholder="Enter title of your task"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Describtion</Form.Label>
              <Form.Control value={editeddes} onChange={deshandler} as="textarea" rows={3} />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose}>
              Save Changes
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditModal