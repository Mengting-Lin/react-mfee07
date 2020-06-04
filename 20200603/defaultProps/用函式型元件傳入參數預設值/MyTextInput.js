
// 所有狀態與更動狀態均來自於上層父母元件

import React, { useState } from 'react'

function MyTextInput(props) {
  // 解構賦值
  const { value, onChange } = props

  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      {/* 相當於以下的語法 */}
      {/* <input type="text" {...props} /> */}
    </>
  )
}

export default MyTextInput