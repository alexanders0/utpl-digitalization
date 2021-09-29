import React from 'react';
import 'scanner.js';
import { Scanner } from '../Scanner';
import { UploadFileForm } from '../UploadFileForm';
import { UploadScannedDocumentForm } from '../UploadScannedDocumentForm';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../../utpl_logo.png';

function AppUI() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="15"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Scan App
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Scanner />
      <UploadScannedDocumentForm />
      {/* <UploadFileForm /> */}
    </>
  );
}

export { AppUI };
