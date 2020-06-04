// 父母元件-->接收子女元件傳送的資料(至component查看)

import React, { useState } from 'react'
import MyTextInput from './components/MyTextInput'

function App() {
  return (
    <>
      <h1>你好，XXXX</h1>
      <MyTextInput />
    </>
  )
}

export default App