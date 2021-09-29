import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BsFileEarmarkCheck } from 'react-icons/bs';
import { BsFileEarmarkMinus } from 'react-icons/bs';

function UploadFileModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload Status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          !props.error ?
          <p>
            <BsFileEarmarkCheck color="green" /> File uploaded successfully!
          </p> :
          <>
          <p>
            <BsFileEarmarkMinus color="red" /> There was an error :(
          </p>
          <p>
            Please try again.
          </p>
          </>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button size="sm" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export { UploadFileModal }
