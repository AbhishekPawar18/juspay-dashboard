import React from 'react'
import Index from './components'
import 'typeface-inter';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <GlobalStyles />
      <Index />
    </div >
  )
}

export default App