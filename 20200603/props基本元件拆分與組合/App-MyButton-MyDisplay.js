import React, { useState } from 'react'
// 匯入MyDisplay.js
import MyDisplay from './components/MyDisplay'
// 匯入MyButton.js
import MyButton from './components/MyButton'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      {/* JSX語法：<自定義function component />，同一行中結尾  */}
      {/* JSX有區分大小寫，html則無 */}
      {/* total為自定義屬性，但須為合法JS語法 */}
      <MyDisplay total={total} />

      {/* title、clickMethod為自定義屬性 */}
        {/* JSX結構寫法1 */}
      <MyButton title="+1" clickMethod={() => {
          setTotal(total + 1)
        }}/>
        {/* JSX結構寫法2 */}
      <MyButtonDec title="-1"
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </MyButtonDec>
    </>
  )
}

export default App