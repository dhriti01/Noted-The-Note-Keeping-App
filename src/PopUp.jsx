import React, { useState}  from "react";
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PopUp(props) {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
        
    }

    function handleShow() {
        setShow(true);
    }

  return (
      <div className="pop-up">
          <Tooltip variant="light" onClick={handleShow}>
              <IconButton>
                  <EditIcon />
                  </IconButton>
        </Tooltip>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg"aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
            <Form className="edit-form">
            <Form.Group className="mb-3" controlId="title-input">
                <Form.Control
                name="title"
                onChange={props.handleEdit}
                type="text"
                placeholder="Title"
                maxlength="100"
                value={props.title}          
                style={{outline: "none", padding: "0"}}
                          
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="content-input">
              <Form.Control as="textarea" name="content" placeholder="Content" onChange={props.handleEdit} value={props.content} rows={3} style={{height: 0.4*window.innerHeight, outline: "none", padding: "0"}} />
            </Form.Group>
          </Form>     
        </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={() => {
                props.makeEdit();
                handleClose();
            }}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}
  
export default PopUp;