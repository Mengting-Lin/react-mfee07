
// 子女元件只用父母元件狀態

import React, { useState } from 'react'
import MyTextInput from './components/MyTextInput'

function App() {
  const [nameFromChild, setNameFromChild] = useState('')
  return (
    <>
      <h1>你好，{nameFromChild}</h1>
      <MyTextInput 
        value={nameFromChild}
        onChange={(event) => setNameFromChild(event.target.value)}  
      />
    </>
  )
}

export default App