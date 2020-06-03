//父母元件-->接收子女元件傳送的資料(至component查看)

import React, { useState } from 'react'
import MyTextInput from './components/MyTextInput'

function App() {
  const [nameFromChild, setNameFromChild] = useState('')
  return (
    <>
      <h1>你好，{nameFromChild}</h1>
      <MyTextInput sendNameToMe={(text)=>{setNameFromChild(text)}}/>
    </>
  )
}

export default App