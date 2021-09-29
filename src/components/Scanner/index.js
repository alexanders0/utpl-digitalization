import React from 'react';
import { Scan } from '../Scan';
import Container from 'react-bootstrap/Container';
import { ScanParameter } from '../ScanParameter';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Scanner() {

  const [colorMode, setColorMode] = React.useState('TWPT_RGB');
  const [resolution, setResolution] = React.useState('200');
  const [paperSize, setPaperSize] = React.useState('TWSS_A4');

  let colorModes = [
    { value: "TWPT_RGB", label: "Color" },
    { value: "TWPT_GRAY", label: "Gris" },
    { value: "TWPT_BW", label: "Blanco/Negro" },
  ]

  let resolutions = [
    { value: "100", label: "100" },
    { value: "150", label: "150" },
    { value: "200", label: "200" },
    { value: "250", label: "250" },
    { value: "300", label: "300" },
    { value: "350", label: "350" },
    { value: "400", label: "400" },
  ]

  let paperSizes = [
    { value: "TWSS_A4", label: "A4" },
    { value: "TWSS_USLETTER", label: "Carta" },
  ]

  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col xs={6} md={3}>
              <h4>Scan Parameters</h4>
              <ScanParameter
                label="Color mode"
                parameterValue={colorMode}
                setParameterValue={setColorMode}
                options={colorModes}
              />
              <ScanParameter
                label="Resolution (DPI)"
                parameterValue={resolution}
                setParameterValue={setResolution}
                options={resolutions}
              />
              <ScanParameter
                label="Paper Size"
                parameterValue={paperSize}
                setParameterValue={setPaperSize}
                options={paperSizes}
              />
            </Col>
            <Col xs={12} md={8}>
              <Scan
                colorMode={colorMode}
                resolution={resolution}
                paperSize={paperSize}
              />
            </Col>
          </Row>
        </Form>
      </Container>

    </>
  )
}

export { Scanner };
