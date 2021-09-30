import React from 'react';
import { DigitalizationContext } from '../DigitalizationContext';
import { FileProperty } from '../FileProperty';
import { ScannedFile } from '../ScannedFile';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import { UploadFileModal } from '../UploadFileModal';
import { FaFileUpload } from 'react-icons/fa';

function UploadScannedDocumentForm() {

  const {
    scannedDocuments
  } = React.useContext(DigitalizationContext);

  const URL = "https://attachments-test.xyz/requirements/";

  const [nameValue, setNameValue] = React.useState('RQ00');
  const [descriptionValue, setDescriptionValue] = React.useState('Sample Desc');
  const [fileNameValue, setFileNameValue] = React.useState('scannedDocument.pdf');
  const [indexDocument, setIndexDocument] = React.useState(0);
  const [modalShow, setModalShow] = React.useState(false);

  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const changeFileName = (scannedDocument, fileName) => {
    return new File(
      [scannedDocument],
      fileName,
      { type: 'application/pdf' }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let scannedDocument = changeFileName(
      scannedDocuments[indexDocument],
      fileNameValue
    );

    let formData = new FormData();

    formData.append('name', nameValue);
    formData.append('description', descriptionValue);
    formData.append('attachment', scannedDocument);
    console.log(scannedDocument);

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
      setLoading(false);
      if (response.status === 201) {
        setError(false);
        setModalShow(true);

        console.log("Todo OK");
        console.log(response.data);
      }
    })
    .catch((error) => {
      setLoading(false);
      setError(true);
      setModalShow(true);

      console.log(error);
      
    })

  }; 

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit} className="col-md-4 mx-auto">
          <h4>Upload Scanned File</h4>
          <FileProperty
            labelName="Requirement Name: "
            propertyValue={nameValue}
            setPropertyValue={setNameValue}
          />          
          <FileProperty
            labelName="Requirement Description: "
            propertyValue={descriptionValue}
            setPropertyValue={setDescriptionValue}
          />
          <FileProperty
            labelName="Document Name: "
            propertyValue={fileNameValue}
            setPropertyValue={setFileNameValue}
          />
          <ScannedFile
            labelName="Scanned Document: "
            scannedDocuments={scannedDocuments}
            propertyValue={indexDocument}
            setPropertyValue={setIndexDocument}
          />
          <Button
            variant="primary"
            size="sm"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ?
              <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              />: <FaFileUpload />
            }
            {isLoading ? ' Uploading file...' : ' Upload file'}
          </Button>
        </Form>
      </Container>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
      <UploadFileModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        error={error}
      />
    </>
  )
}

export { UploadScannedDocumentForm }
