// 子女component
// 使用父母component props引入資料

import React, { useState } from 'react'

function MyButton(props) {
  return (
  <>
    <button onClick={props.clickMethod}>{props.title}</button>
  </>
  )
}

export default MyButton