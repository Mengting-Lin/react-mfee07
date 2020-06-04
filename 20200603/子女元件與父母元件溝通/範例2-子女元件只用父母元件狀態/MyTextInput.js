
// 子女與父母元件間資料連結較深，統一由父母元件傳輸資料
// 所有狀態與更動狀態均來自於上層父母元件

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