import React from 'react';

const DigitalizationContext = React.createContext();

function DigitalizationProvider(props) {

  const [scannedDocuments, setScannedDocuments] = React.useState([]);
  const [isScanning, setScanning] = React.useState(false);

  return (
    <DigitalizationContext.Provider value={{
      scannedDocuments,
      setScannedDocuments,
      isScanning,
      setScanning
    }}>
      {props.children}
    </DigitalizationContext.Provider>
  )
}

export { DigitalizationContext, DigitalizationProvider };
