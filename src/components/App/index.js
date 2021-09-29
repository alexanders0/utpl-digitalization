import React from 'react';
import { DigitalizationProvider } from '../DigitalizationContext';
import { AppUI } from './AppUI';

function App() {
  return (
    <DigitalizationProvider>
      <AppUI />
    </DigitalizationProvider>
  )
}

export default App
