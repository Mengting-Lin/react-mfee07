
// 子女元件-->傳送資料至父母元件
import React, { useState } from 'react'

function MyTextInput(props) {

  return (
    <>
      <input type="text" value={props.value} onChange={props.onChange} />
      {/* 相當於以下的語法 */}
      {/* <input type="text" {...props} /> */}
    </>
  )
}

export default MyTextInput