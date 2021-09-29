import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function FileProperty(props) {

  const onPropertyValueChange = (event) => {
    props.setPropertyValue(event.target.value);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.labelName}</Form.Label>
      <Form.Control
        required
        size="sm"
        type="text"
        placeholder="Enter a value"
        value={props.propertyValue}
        onChange={onPropertyValueChange}
      />
    </Form.Group>
  )
}

export { FileProperty }
