
// {hook}
import React, { useState } from "react";

function App() {

  const [total, setTotal] = useState(0);    
  // total --> getter 
  // setTotal --> setter
  // useState(0) --> function(初始值)

  return (
    <>
      <h1>{total}</h1>
      <button        
        onClick={() => {            // onClick --> 屬性={箭頭函式}
          setTotal(total + 1);      // 改變setTotal的狀態(形式為total+1)
        }}
      >
        +1
      </button>
      <button
       onClick={() => {
          setTotal(total - 1);
        }}
      >-1</button>
    </>
  );
}

export default App;