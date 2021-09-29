import React from 'react';
import { FileProperty } from '../FileProperty';
import { FileContent } from '../FileContent';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UploadFileForm() {

  const URL = "https://attachments-test.xyz/requirements/";

  const [nameValue, setNameValue] = React.useState('');
  const [descriptionValue, setDescriptionValue] = React.useState('');
  const [file, setFile] = React.useState(null);

  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('name', nameValue);
    formData.append('description', descriptionValue);
    formData.append('attachment', file);

    setLoading(true);

    axios.post(
      URL,
      formData,
      { 
        headers: {
          /* "Authorization": `Token ${token}`, */
          "Content-type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      if (response.status === 201) {
          console.log("Todo OK");
          console.log(response.data);
      }
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setError(error);
      setLoading(false);
    })

  }; 

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FileProperty
          labelName="Requirement Name: "
          defaultValue="RQ00"
          propertyValue={nameValue}
          setPropertyValue={setNameValue}
        />          
        <FileProperty
          labelName="Requirement Description: "
          defaultValue="Description Sample"
          propertyValue={descriptionValue}
          setPropertyValue={setDescriptionValue}
        />
        <FileContent
          labelName="File: "
          setFile={setFile}
        />
        <Button
          variant="primary"
          size="sm"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Loading…' : 'Upload file'}
        </Button>
      </Form>
    </Container>
  )
}

export { UploadFileForm };
