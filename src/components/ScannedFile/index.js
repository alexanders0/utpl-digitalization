import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function ScannedFile(props) {

  const handleChange = (event) => {
    props.setPropertyValue(event.target.value);
  };

  return (
    <FloatingLabel
      controlId="floatingSelect"
      label={props.labelName}
      className="mb-2"
    >
      <Form.Select
        aria-label="Floating label select example"
        value={props.propertyValue}
        onChange={handleChange}
        required
      >
        {
          props.scannedDocuments.map(
            (scannedDocument, index) => 
            <option
              key={index}
              value={index}
            >
              {index + 1}
            </option>
          )
        }
      </Form.Select>
    </FloatingLabel>
  )
}

export { ScannedFile }
