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
  const [detectBlankPages, setDetectBlankPages] = React.useState('false');
  const [keepBlankPages, setKeepBlankPages] = React.useState('keep');
  const [blankPageSeparator, setBlankPageSeparator] = React.useState("");

  let colorModeOptions = [
    { value: "TWPT_RGB", label: "Color" },
    { value: "TWPT_GRAY", label: "Gris" },
    { value: "TWPT_BW", label: "Blanco/Negro" },
  ]

  let resolutionsOptions = [
    { value: "100", label: "100" },
    { value: "150", label: "150" },
    { value: "200", label: "200" },
    { value: "250", label: "250" },
    { value: "300", label: "300" },
    { value: "350", label: "350" },
    { value: "400", label: "400" },
  ]

  let paperSizesOptions = [
    { value: "TWSS_A4", label: "A4" },
    { value: "TWSS_USLETTER", label: "Carta" },
  ]

  let DetectBlankPagesOptions = [
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
  ]

  let keepBlankPagesOptions = [
    { value: "keep", label: "Yes" },
    { value: "remove", label: "No" },
  ]

  let blankPageSeparatorOptions = [
    { value: "blank:DOC_SEP", label: "Yes" },
    { value: "", label: "No" },
  ]

  return (
    <>
      <Container className="mt-3">
        <Form>
          <Row>
            <Col xs={6} md={3}>
              <h4>Scan Parameters</h4>
              <ScanParameter
                label="Color mode"
                parameterValue={colorMode}
                setParameterValue={setColorMode}
                options={colorModeOptions}
              />
              <ScanParameter
                label="Resolution (DPI)"
                parameterValue={resolution}
                setParameterValue={setResolution}
                options={resolutionsOptions}
              />
              <ScanParameter
                label="Paper Size"
                parameterValue={paperSize}
                setParameterValue={setPaperSize}
                options={paperSizesOptions}
              />
              <ScanParameter
                label="Detect Blank Pages"
                parameterValue={detectBlankPages}
                setParameterValue={setDetectBlankPages}
                options={DetectBlankPagesOptions}
              />
              {detectBlankPages === "true" ?
                <>
                  <ScanParameter
                    label="Keep Blank Pages"
                    parameterValue={keepBlankPages}
                    setParameterValue={setKeepBlankPages}
                    options={keepBlankPagesOptions}
                  />
                  <ScanParameter
                    label="Document Separator (Blank Page)"
                    parameterValue={blankPageSeparator}
                    setParameterValue={setBlankPageSeparator}
                    options={blankPageSeparatorOptions}
                  />
                </>
              : null }

            </Col>
            <Col xs={12} md={8}>
              <Scan
                colorMode={colorMode}
                resolution={resolution}
                paperSize={paperSize}
                detectBlankPages={detectBlankPages}
                keepBlankPages={keepBlankPages}
                blankPageSeparator={blankPageSeparator}
              />
            </Col>
          </Row>
        </Form>
      </Container>

    </>
  )
}

export { Scanner };
