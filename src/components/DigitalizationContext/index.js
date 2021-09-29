import React from 'react';

const DigitalizationContext = React.createContext();

function DigitalizationProvider(props) {

  const [scannedDocuments, setScannedDocuments] = React.useState([]);

  return (
    <DigitalizationContext.Provider value={{
      scannedDocuments,
      setScannedDocuments
    }}>
      {props.children}
    </DigitalizationContext.Provider>
  )
}

export { DigitalizationContext, DigitalizationProvider };
