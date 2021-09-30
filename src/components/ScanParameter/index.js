import React from 'react';
import { DigitalizationContext } from '../DigitalizationContext';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ScanParameter(props) {

  const {
    isScanning
  } = React.useContext(DigitalizationContext);

  const handleChange = (event) => {
    props.setParameterValue(event.target.value);
  };

  return (
    <FloatingLabel
      controlId="floatingSelect"
      label={props.label}
      className="mb-2"
    >
      <Form.Select
        disabled={ isScanning ? "true" : "" }
        aria-label="Floating label select example"
        value={props.parameterValue}
        onChange={handleChange}
      >
        {
          props.options.map(
            (option) => 
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          )
        }
      </Form.Select>
    </FloatingLabel>
  )
}

export { ScanParameter };
