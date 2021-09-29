import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function FileContent(props) {

  const onFileChange = (event) =>  {
    props.setFile(event.target.files[0]);
  };

  return (
    <Form.Group controlId="formFileSm" className="mb-3">
      <Form.Label>{props.labelName}</Form.Label>
      <Form.Control required type="file" size="sm" onChange={onFileChange} />
    </Form.Group>
  )
}

export { FileContent }
