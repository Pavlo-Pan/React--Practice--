import { useState } from 'react';

import Form from '../Form/Form';

import './App.css'

function App() {
  const [color, setColor] = useState('#fff');

  const updateColor = (newColor) => {
    setColor(newColor)
   }

  return (
    <>
      <div className='container' style={{ backgroundColor: color }}>
        <Form onSubmit={updateColor} />
      </div>

    </>
  )
}

export default App
