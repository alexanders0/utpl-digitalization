import React from 'react';
import { DigitalizationContext } from '../DigitalizationContext';
import 'scanner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { MdScanner } from 'react-icons/md';
import { AiOutlineClear } from 'react-icons/ai';

/* global scanner */

function Scan(props) {

  const {
    setScannedDocuments,
    isScanning,
    setScanning
  } = React.useContext(DigitalizationContext);

  const [scannedImages, setScannedImages] = React.useState([]);
  const [scannedThumbnails, setScannedThumbnails] = React.useState([]);

  const cleanScanner = () => {
    setScannedImages([]);
    setScannedThumbnails([]);
    setScannedDocuments([]);
  };

  const addScannedImage = (scannedImage) => {
    setScannedImages(prevScannedImages => {
      return [
        ...prevScannedImages,
        scannedImage
      ]
    })
  };

  const addScannedThumbnail = (scannedThumbnail) => {
    setScannedThumbnails(prevThumbnails => {
      return [
        ...prevThumbnails,
        scannedThumbnail
      ]
    })
  };

  const addScannedDocument = (scannedDocument) => {
    setScannedDocuments(prevScannedDocuments => {
      return [
        ...prevScannedDocuments,
        scannedDocument
      ]
    })
  };

  const fixBinary = (bin) => {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i);
    }
    return buf;
  };

  const convertToFile = (scannedImage) => {
    let pdf = scannedImage.src.split(',')[1];
    let binary = fixBinary(window.atob(pdf));
    let blob = new Blob([binary], { type: "application/pdf"});
    let file = new File([blob], "document.pdf", { type: 'application/pdf' });
    return file;
  };

  const scanDocument = () => {
    setScanning(true);
    scanner.scan(
      displayImagesOnPage,
      {
        "use_asprise_dialog": false,
        "prompt_scan_more":  true, /** Default value: false */    
        // --------------- Scan Settings ---------------      
        "twain_cap_setting" : {
            "ICAP_PIXELTYPE" : props.colorMode,
            "ICAP_XRESOLUTION" : props.resolution,
            "ICAP_YRESOLUTION" : props.resolution,
            "ICAP_SUPPORTEDSIZES" : props.paperSize,
        },
        // --------------- Processing Settings ---------------
        // Blank page detection/discard
        "detect_blank_pages": props.detectBlankPages, /** Default value: false */
        "blank_page_threshold": "0.0001",
        "blank_page_margin_percent": "8",
        "blank_page_policy": props.keepBlankPages,

        // Document separation
        "doc_separators": [ /** applicable for PDF and TIFF formats only. */
            props.blankPageSeparator  /** Use blank sheets to separate documents. */
        ],

        // --------------- Output Settings ---------------
        "output_settings": [
            {
                "type": "return-base64",
                /* "format": "jpg" */
                "format": "pdf"
            },
            {
                "type": "return-base64-thumbnail",
                "format": "jpg",
                "thumbnail_height": 400
            }
        ]
      }
    )
  };

  const displayImagesOnPage = (successful, mesg, response) => {

    if(!successful) { // On error
      console.error('Failed: ' + mesg);
      setScanning(false);
      return;
    }

    if(successful && mesg != null && mesg.toLowerCase().indexOf('user cancel') >= 0) { // User cancelled.
      console.info('User cancelled');
      setScanning(false);
      return;
    }

    var scannedImages = scanner.getScannedImages(response, true, false); // returns an array of ScannedImage
    for(let i = 0; (scannedImages instanceof Array) && i < scannedImages.length; i++) {
      var scannedImage = scannedImages[i];
      processOriginal(scannedImage);
    }

    var thumbnails = scanner.getScannedImages(response, false, true); // returns an array of ScannedImage
    for(let i = 0; (thumbnails instanceof Array) && i < thumbnails.length; i++) {
      var thumbnail = thumbnails[i];
      processThumbnail(thumbnail);
    }

    setScanning(false);
  };

  const processOriginal = (scannedImage) => {
    addScannedImage(scannedImage);

    let scannedDocument = convertToFile(scannedImage);
    addScannedDocument(scannedDocument);
  };

  const processThumbnail = (scannedThumbnail) => {
    addScannedThumbnail(scannedThumbnail);
  };

  return (
    <>
      <Container>
        <Button
          className="m-1"
          variant="primary"
          size="sm"
          type="submit"
          disabled={isScanning}
          onClick={scanDocument}
        >
          {isScanning ?
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />: <MdScanner />
          }
          {isScanning ? ' Scanning…' : 'Scan'}
        </Button>

        <Button
          className="m-1"
          variant="primary"
          size="sm"
          type="submit"
          onClick={cleanScanner}
        >
          <AiOutlineClear />Clear
        </Button>
      </Container>

      <Container>
        <Row>
          <p>Longitud imagesScanned: {scannedImages.length}</p>
          <p>Longitud Thumbnails: {scannedThumbnails.length}</p>
          {
            scannedThumbnails.map(
              (scannedThumbnail, index) => 
                <Col key={index} xs={6} md={4}>
                  <Badge pill bg="primary">
                    {index + 1}
                  </Badge>
                  <Image id="sampleImg" src={scannedThumbnail.src} thumbnail />
                </Col>
            )
          }
        </Row>
      </Container>
    </>
  )
}

export { Scan }
